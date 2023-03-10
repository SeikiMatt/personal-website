import type { NextPage } from "next";
import Head from "next/head";
import { FiGithub, FiCodepen, FiMail } from "react-icons/fi";
import Background from "../components/Background";

const Home: NextPage = () => {
  return (
    <div className="responsive-container px-8">
      <Head>
        <title>Matheus - Full-stack Web Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {/*eslint-disable-next-line @next/next/no-page-custom-font*/}
      <link
        href="https://fonts.googleapis.com/css2?family=Cabin&family=Raleway&display=swap"
        rel="stylesheet"
      />
      <Background />
      <header className="flex justify-center items-center h-screen">
        <div className="lg-heading text-center">
          <div>
            Hello! I am{" "}
            <span className="text-primary-5 text-display">Matheus</span>.
          </div>
          <div>I&apos;m a full-stack web developer.</div>
          <hr className="my-6" />
          <div className="md-heading flex justify-center gap-4">
            <a target="_blank" rel="noreferrer" href={process.env.GITHUB}>
              <FiGithub className="hover:text-primary-4 hover:cursor-pointer" />
            </a>
            <a target="_blank" rel="noreferrer" href={process.env.CODEPEN}>
              <FiCodepen className="hover:text-primary-4 hover:cursor-pointer" />
            </a>
            <a target="_blank" rel="noreferrer" href={process.env.EMAIL}>
              <FiMail className="hover:text-primary-4 hover:cursor-pointer" />
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Home;
