// pages/index.js

import Link from "next/link";

import Layout from "../components/Layout"


const Index = () => (
    <Layout>
        <br />
        <Link href="/explore">
         <a>Hi, I am Nicholas Ward. Find out more about me here</a>
        </Link>
    </Layout>
);

export default Index;