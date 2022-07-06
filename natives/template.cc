#include <Magick++.h>
#include <napi.h>

#include <iostream>
#include <list>

using namespace std;
using namespace Magick;

Napi::Value Template(const Napi::CallbackInfo &info) {
  Napi::Env env = info.Env();

  try {
    Napi::Object obj = info[0].As<Napi::Object>();
    Napi::Buffer<char> data = obj.Get("data").As<Napi::Buffer<char>>();
    string templatestr = obj.Get("template").As<Napi::String>().Utf8Value();
    string compdim = obj.Get("compdim").As<Napi::String>().Utf8Value();
    string resizedim = obj.Get("resizedim").As<Napi::String>().Utf8Value();
    string origdim = obj.Get("origdim").As<Napi::String>().Utf8Value();
    string type = obj.Get("type").As<Napi::String>().Utf8Value();
    string bgpath = obj.Has("bgpath") ? obj.Get("bgpath").As<Napi::String>().Utf8Value() : "./assets/images/pixel.png";
    int delay =
        obj.Has("delay") ? obj.Get("delay").As<Napi::Number>().Int32Value() : 0;

    Blob blob;

    list<Image> frames;
    list<Image> coalesced;
    list<Image> mid;
    Image templateimg;
    readImages(&frames, Blob(data.Data(), data.Length()));
    templateimg.read(templatestr);

    coalesceImages(&coalesced, frames.begin(), frames.end());

    for (Image &image : coalesced) {
      Image final;
      final.read(bgpath);
      final.resize(Geometry(origdim));
      image.scale(Geometry(resizedim));
      final.composite(image, Geometry(compdim), Magick::OverCompositeOp);
      final.composite(templateimg, Geometry("+0+0"), Magick::OverCompositeOp);
      final.magick(type);
      final.animationDelay(delay == 0 ? image.animationDelay() : delay);
      mid.push_back(final);
    }

    optimizeTransparency(mid.begin(), mid.end());

    if (type == "gif") {
      for (Image &image : mid) {
        image.quantizeDitherMethod(FloydSteinbergDitherMethod);
        image.quantize();
      }
    }

    writeImages(mid.begin(), mid.end(), &blob);

    Napi::Object result = Napi::Object::New(env);
    result.Set("data", Napi::Buffer<char>::Copy(env, (char *)blob.data(),
                                                blob.length()));
    result.Set("type", type);
    return result;
  } catch (std::exception const &err) {
    throw Napi::Error::New(env, err.what());
  } catch (...) {
    throw Napi::Error::New(env, "Unknown error");
  }
}