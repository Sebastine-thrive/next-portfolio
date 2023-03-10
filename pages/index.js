import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Main } from '@/components/Main';
import { Navbar } from '@/components/Navbar';
import { ProjectItems } from '@/components/project/ProjectItems';
import { Skills } from '@/components/Skills';
import Head from 'next/head';



export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title> Sebastine Ogu | Front-end Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="logo.ico" />
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <ProjectItems data={data} />
      <Contact />
    </div>
  )
}



export async function getStaticProps() {
  const { projects } = await import('/data/data.json');

  return {
    props: {
      data: projects
    }
  };
}