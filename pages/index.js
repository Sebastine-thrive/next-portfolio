import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Main } from '@/components/Main';
import { Projects } from '@/components/project/Projects';
import { Skills } from '@/components/Skills';
import Head from 'next/head';



export default function Home( { data } ) {
  return (
    <div>
      <Head>
        <title> Sebastine Ogu | Front-end Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects data={data}  />
      <Contact />
    </div>
  )
}


export async function getServerSideProps() {
  const { events_categories} = await import('/data/data.json');

  return {
    props: {
      data: events_categories
    }
  }
}