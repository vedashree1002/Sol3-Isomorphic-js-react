import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";
import Layout from "./shared-comp/Layout";

const app = express();

app.use( express.static( path.resolve( __dirname, "../dist" ) ) );

app.get( "/*", ( req, res ) => {
    const jsx = ( <Layout /> );
    const reactDom = renderToString( jsx );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom ) );
} );

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is listening");
});


function htmlTemplate( reactDom ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8"  default-src 'self'>
            <title>Isomorphic JS Application using React</title>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}
