import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Liam | Full-Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Nav/>
    <Main/>
    <About/>
    <Skills/>
    <Projects />
    </div>
  )
}
