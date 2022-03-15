import FujiPagodaImage from "../images/fuji-pagoda.jpg";

const Banner = () => (
  <section
    className="w-full overflow-hidden bg-red-300 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${FujiPagodaImage.src})`, height: "60vh" }}
  >
    <div className="inset-0 bg-opacity-30 h-full w-full text-white banner-gradient-overlay">
      <div className="container mx-auto h-full flex items-center">
        <div className="px-6 md:w-1/2">
          <h1 className="text-4xl tracking-tight text-white mb-4">
            Pioneer in the field of <strong>Global Education</strong>
          </h1>
          <p className="mb-8">
            <strong>Seishin</strong> dispels all the myths usually associated
            with a abroad study. We help you find the way and fulfill all your
            needs to study in international colleges or universities.
          </p>
          <a
            href="tel:+9779841566136"
            className="inline-block bg-teal-400 py-4 px-8 rounded font-bold shadow-md mr-5"
          >
            Call Us
          </a>
          <a
            href="mailto:info@seishin.edu.np"
            className="inline-block bg-teal-400 py-4 px-8 rounded font-bold shadow-md"
          >
            Email
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default Banner;
