import Layout from "../../src/sections/Layout";
import {useRouter} from 'next/router'
import CountryDetail from "../../src/pages/CountryDetail";
import Head from 'next/head'

export default function country() {
    const router = useRouter()
    const {id} = router.query

    let title = '';
    if (id !== undefined) {
        title = id.charAt(0).toUpperCase() + id.slice(1);
    }

    return <>
        <Head>
            <title>{title} | Metus Challenge</title>
        </Head>
        <Layout>
            <div className="max-w-[1920px] mx-auto">
                {id !== undefined ? (
                    <CountryDetail country={id}/>) : ''}
            </div>
            <section className="flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32">

            </section>
        </Layout>
    </>

}
