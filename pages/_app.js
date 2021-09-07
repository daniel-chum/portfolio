import "../assets/main.css";
import "../assets/chrome-bug.css";
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Daniel Chum</title>
        <meta keywords="engineer, experienced, senior, junior, web developer, programming, programmer, software developer, software engineer, devops, data structure and algorithm, data structures, algorithn" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
