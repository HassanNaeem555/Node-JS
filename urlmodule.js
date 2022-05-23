import url from "url";

const newUrl = new URL("https://example.org:8000 ");
newUrl.pathname = "/a/b";
newUrl.search = "?d=e";
newUrl.hash = "#fgh";

console.log("newUrl", newUrl);
console.log("newUrl", newUrl.href);
