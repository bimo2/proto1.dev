import { define } from "../define.ts";

export default define.page(function ({ Component }) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>proto1.dev</title>
      </head>
      <body class="font-sans antialiased">
        <Component />
      </body>
    </html>
  );
});
