import React from "react";
import ReactDom from "react-dom/server";
import App from "./app.jsx";

export default (_req, res) => {
  const componetntHtml = ReactDom.renderToString(<App />);
  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SSR REACT OWNER</title>
  </head>
  <body>
    ${componetntHtml}
  </body>
</html>`;
  res.send(html);
};
