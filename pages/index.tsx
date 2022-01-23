import Head from "next/head";
import Sticky from "react-stickynode";
import NavBar from "../components/NavBar";

const IndexPage = () => {
  return (
    <>
      <Head>
        <title>Seishin Education</title>
        <meta
          name="Description"
          content="Abroad Higher Education Consultancy Nepal Japan UK US Europe"
        />
        <meta
          name="keywords"
          content="Education, Higher Eductaion, Abroad, Nepal, Japan, UK, US, Europe, Australia"
        />
      </Head>

      <div className="overflow-hidden">
        <Sticky top={0} activeClass="sticky-active">
          <NavBar />
        </Sticky>

        <div className="container border border-3 border-red-700 h-screen">
          <h1>Item here</h1>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
