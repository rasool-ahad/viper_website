import Head from "next/head";
import Atributies from "../component/atributies/Atributies";
import Footer from "../component/footer/Footer";
import Intro from "../component/intro/Intro";
import { Navbar } from "../component/navbar/Navbar";
import Blog from "../component/blog/blogList";
import Meta from "../component/meta/Meta";
import LandingContent from "../component/landingContent/landingContent";

// const DynamicComponentWithNoSSR = dynamic(() => import('../component/chartPrice/ChartPrice'), {
//   ssr: false
// })
const Home = () => {
  return (
    <>
      <main>
        <Head>
          <title>وایپر | شرکت دیتاسینس ایرانی</title>
          <meta
            name="description"
            content="بهترین شرکت دیتاساینس ایران - انجام پروژه های دیتاساینس - پشتیبانی ۲۴ ساعته"
          />
          <link rel="canonical" href="https://digiex24.com/" />
        </Head>
        <Meta name="index" />
        <Navbar />
        <Intro />
        <LandingContent />
        <Atributies />
        <Blog />
        <Footer />
      </main>
    </>
  );
};

export default Home;
