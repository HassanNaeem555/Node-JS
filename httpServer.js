import http from "http";
import fs from "fs";

const port = process.env.PORT || 4000;
const server = http.createServer((request, response) => {
  //   response.setHeader("Content-Type", "application/json");
  response.setHeader("Content-Type", "text/html");
  if (request.url == "/") {
    response.statusCode = 200;
    response.end(
      "<h1>This is me learning Node js.</h1><p>Hey this is the time to rock the world on HOMEPAGE</p>"
    );
  } else if (request.url == "/about") {
    response.statusCode = 200;
    response.end(
      "<h1>This is me learning Node js.</h1><p>Hey this is the time to rock the world on ABOUTPAGE</p>"
    );
  } else {
    response.statusCode = 404;
    const result = fs.readFileSync("notRecognisedPage.html");
    response.end(result.toString());
  }
});
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
