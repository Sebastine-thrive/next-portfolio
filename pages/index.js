import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import Footer from "@/components/Footer";
import { Main } from "@/components/Main";
import { Navbar } from "@/components/Navbar";
import { ProjectItems } from "@/components/project/ProjectItems";
import { Skills } from "@/components/Skills";
import Head from "next/head";

export default function Home({ data }) {
  return (
    <div className="w-[100vw] max-w-[1920px]">
      <Head>
        <title> Sebastine Ogu | Front-end Web Developer</title>
        <meta
          name="description"
          content="Sebastine Ogu is a web developer skilled in creating and maintaining websites and
            web applications leveraging technologies such as HTML, CSS,
            CSS frameworks/libraries such as Bootstrap, SASS, TailwindCSS;
            Javascript, Typescript REACT, NEXTJS etc."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <section id="home">
        <Main />
      </section>
      <section id="about">
        {" "}
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <ProjectItems data={data} />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const { projects } = await import("/data/data.json");

  return {
    props: {
      data: projects,
    },
  };
}
