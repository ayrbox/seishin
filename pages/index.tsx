import Head from "next/head";
import Sticky from "react-stickynode";
import Banner from "../components/Banner";
import NavBar from "../components/NavBar";
import Map from "../components/Map";
import Values from "../components/Values";
import ComplianceSection from "../components/Compliance";
import Message from "../components/Message";

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

        <div className="flex flex-col w-screen overflow-hidden -z-10 -mt-20">
          <Banner />
          <Map />
          <Values />
          <ComplianceSection />
          <Message />

          <div className="h-screen">
            <h1>Item here</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
