// code graciously borrowed from HiddenPhox https://gitlab.com/Cynosphere/HiddenPhox/-/blob/rewrite/src/lib/utils.js

export function safeString(string, newLines = true) {
    string = string ? string.toString() : "";
    string = string.replace(/`/g, "'");
    string = string.replace(/<@/g, "<@\u200b");
    string = string.replace(/<#/g, "<#\u200b");
    string = string.replace(/<&/g, "<&\u200b");
    if (newLines) string = string.replace(/\n/g, " ");
    return string;
}

export function formatTime(number) {
    let seconds = parseInt(number) / 1000;
    const days = Math.floor(seconds / 86400);
    seconds = seconds % 86400;
    const hours = Math.floor(seconds / 3600);
    seconds = seconds % 3600;
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);
    return (
        (days !== 0 ? `${days.toString().padStart(2, "0")}:` : "") +
        (hours !== 0 ? `${hours.toString().padStart(2, "0")}:` : "") +
        `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`
    );
}