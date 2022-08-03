import Layout from "../src/sections/Layout";
import Countries from "../src/pages/Countries";
import Head from "next/head";


export default function Home() {

  return <>
    <Head>
      <title>Countries | Metus Challenge</title>
    </Head>
    <Layout>
      <div className="max-w-[1920px] mx-auto">
        <Countries/>
      </div>
      <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">

      </section>
    </Layout>
  </>
}
