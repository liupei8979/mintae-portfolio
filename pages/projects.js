import Layout from "../components/layout"
import Head from "next/head"
import {TOKEN, DATABASE_ID} from "../config";

export default function Projects(){

    return (
        <>
        <Layout>
        <Head>
        <title>김민태 포트폴리오</title>
        <meta name="description" content="오늘도 빡세게!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
         </Head>
            <h1>프로젝트</h1>
        
         </Layout>
        </>

    )
}
//빌드 타임 호출
export async function getStaticProps(){

    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          'authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({page_size: 100})
      };
      
      const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
    
      const projects = await res.json()


      

      const projectsIds = projects.results.map((aProject) => (
        aProject.id
      ))

      console.log(`projectIds : ${projectIds}`);


    return {
        props: {},
    }
}