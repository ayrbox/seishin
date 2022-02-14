import FujiPagodaImage from "../images/fuji-pagoda.jpg";

const Banner = () => (
  <section
    className="w-full overflow-hidden bg-red-300 bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${FujiPagodaImage.src})`, height: "60vh" }}
  >
    <div className="inset-0 bg-opacity-30 h-full w-full text-white banner-gradient-overlay">
      <div className="container mx-auto h-full flex items-center">
        <div className="w-1/2">
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
            className="bg-teal-400 py-2 px-4 rounded font-bold shadow-md mr-3"
          >
            Call Us at +977 9841566136
          </a>
          <a
            href="mailto:info@seishin.edu.np"
            className="bg-teal-400 py-2 px-4 rounded font-bold shadow-md"
          >
            Email at info@seishin.edu.np
          </a>
        </div>
      </div>
    </div>
  </section>
);
export default Banner;
