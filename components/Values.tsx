import JLPTLogo from "../images/jlpt-logo.png";
import IELTSLogo from "../images/ielts-logo.jpg";

const Values = () => {
  return (
    <div className="py-16 bg-teal-500 text-white text-center">
      <div className="container mx-auto">
        <h1 className="text-3xl pb-8 font-bold">Core Values</h1>
        <p className="text-2xl">
          The core values lies in counseling students to make the right choice
          to pursue international degree, providing Japanese &amp; English
          languages classes and assisting them for <strong>IELTS</strong>,
          <strong> NAT</strong>, <strong>JLPT </strong>
          exams preparation classes.
        </p>
        <div className="flex justify-center items-center p-8 ">
          <div className="w-28 m-3">
            <img src={JLPTLogo.src} alt="JLPT Logo" />
          </div>
          <div className="w-28 m-3">
            <img className="rounded-md" src={IELTSLogo.src} alt="IELTS Logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
