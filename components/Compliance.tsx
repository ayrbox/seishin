import MOELogo from "../images/moe-logo.png";

const ComplianceSection = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="w-40 m-3">
          <img src={MOELogo.src} alt="Ministry of Education, Nepal" />
        </div>
        <h1 className="text-3xl pb-8 text-center md:text-left">
          We are legally established under the Nepalese legislation and
          <strong> Ministry of Education</strong>.
        </h1>
      </div>
    </div>
  );
};

export default ComplianceSection;
