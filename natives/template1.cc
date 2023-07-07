#ifdef MAGICK_ENABLED
#include <Magick++.h>

#include <cstring>
#include <iostream>
#include <list>

#include "common.h"

using namespace std;
using namespace Magick;

ArgumentMap Template1(string type, string *outType, char *BufferData, size_t BufferLength,
            [[maybe_unused]] ArgumentMap Arguments, size_t *DataSize) {
  Blob blob;
  list<Image> frames;
  list<Image> coalesced;
  list<Image> mid;
  Image templateImg;
  
  string bgPath = GetArgumentWithFallback<string>(Arguments, "bgpath", "./assets/images/pixel.png");
  string origDim = GetArgument<string>(Arguments, "origdim");
  string resizeDim = GetArgument<string>(Arguments, "resizedim");
  string compDim = GetArgumentWithFallback<string>(Arguments, "compdim", "+0+0");
  string templateStr = GetArgument<string>(Arguments, "template");
  int delay = GetArgumentWithFallback<int>(Arguments, "delay", 0);

  try {
    templateImg.read(templateStr);
  } catch (Magick::WarningCoder &warning) {
    cerr << "Coder Warning: " << warning.what() << endl;
  } catch (Magick::Warning &warning) {
    cerr << "Warning: " << warning.what() << endl;
  }

  try {
    readImages(&frames, Blob(BufferData, BufferLength));
  } catch (Magick::WarningCoder &warning) {
    cerr << "Coder Warning: " << warning.what() << endl;
  } catch (Magick::Warning &warning) {
    cerr << "Warning: " << warning.what() << endl;
  }
  coalesceImages(&coalesced, frames.begin(), frames.end());

    for (Image &image : coalesced) {
      Image final;
      final.read(templateStr);
      image.scale(Geometry(resizeDim));
      final.composite(image, Geometry(compDim), Magick::OverCompositeOp);
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

  *DataSize = blob.length();

  char *data = (char *)malloc(*DataSize);
  memcpy(data, blob.data(), *DataSize);

  ArgumentMap output;
  output["buf"] = data;

  return output;
}
#endif