import React from "react";
import ReactDOM from "react-dom";
import fetch from "isomorphic-fetch";
import Layout from "./shared-comp/Layout";

const app = document.getElementById( "app" );
ReactDOM.hydrate( <Layout />, app );
