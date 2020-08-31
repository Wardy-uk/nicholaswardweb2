// components/Layout.js

import Head from "next/head";

import Header from "./Header";
import NavBar from "./NavBar";

import "./Layout.scss";
import "./index.scss";

import navButtons from "../config/buttons";


const Layout = props => {
    const appTitle = `Nicholas Ward`;

    return(
    <div className="Layout">
        <Head>
            <title>Nicholas Ward</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/images/favicon/site.webmanifest"/>
            <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
            <link rel="shortcut icon" href="/images/favicon/favicon.ico"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="msapplication-config" content="/images/favicon/browserconfig.xml"/>
            <meta name="theme-color" content="#ffffff"/>           
        </Head>

        <Header appTitle={appTitle} />
        <div className="Content">{props.children}</div>
        <NavBar navButtons={navButtons} />
    </div>
    );
};
export default Layout;