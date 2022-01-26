import WorldMap from "./WorldMap";

const Map = () => {
  return (
    <section className="flex justify-center items-center overflow-hidden relative py-16">
      <div className="w-1/3">
        <WorldMap width="100%" height="auto" fill="#aeaeae" stroke="#fff" />
      </div>
      <h1 className="w-1/2 text-3xl tracking-tight mb-4 text-right text-slate-500">
        We help you find the way and fulfill all your needs to study in
        international colleges or universities.
      </h1>
    </section>
  );
};

export default Map;
