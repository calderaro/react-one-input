export default function html(componentHTML="", bundle, title="NSA Integrity"){
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>${title}</title>
      </head>
      <body>
        <div id="root">${componentHTML}</div>
        <link rel="stylesheet" href="/static/css/font-awesome.min.css">
        <link rel="stylesheet" href="/static/css/bootstrap.min.css">
        <script type="application/javascript" src="/static/vendors.js"></script>
        <script type="application/javascript" src="/static/app.js"></script>
      </body>
    </html>    
  `
}