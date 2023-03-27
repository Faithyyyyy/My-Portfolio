import react from "../assets/reactt.svg";
function Tech() {
  return (
    <>
      <section className="px-5 py-16 md:pt-6  xl:pt-28 max-w-6xl mx-auto xl:px-0">
        <h2 className="font-[Recoleta] font-[900] text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.3] sm:leading-[1.3] md:leading-[1.4] xl:leading-[1.2]  max-w-4xl mb-1 ">
          Technologies
        </h2>
        <p className="text-gray-500 font-openSans text-xl mb-10">
          I've worked with a range of technologies in the web development
          ecosystem.
        </p>
        <div className="grid gap-4 md:grided">
          <div className="flex gap-3">
            <img src={react} alt="" className="h-6 w-6" />
            <span>React</span>
          </div>
          <div className="flex gap-3">
            <img src={react} alt="" className="h-6 w-6" />
            <span>React</span>
          </div>
          <div className="flex gap-3">
            <img src={react} alt="" className="h-6 w-6" />
            <span>React</span>
          </div>
          <div className="flex gap-3">
            <img src={react} alt="" className="h-6 w-6" />
            <span>React</span>
          </div>
          <div className="flex gap-3">
            <img src={react} alt="" className="h-6 w-6" />
            <span>React</span>
          </div>
          <div className="flex gap-3">
            <img src={react} alt="" className="h-6 w-6" />
            <span>React</span>
          </div>
          <div className="flex gap-3">
            <img src={react} alt="" className="h-6 w-6" />
            <span>React</span>
          </div>
          <div className="flex gap-3">
            <img src={react} alt="" className="h-6 w-6" />
            <span>React</span>
          </div>
          <div className="flex gap-3">
            <img src={react} alt="" className="h-6 w-6" />
            <span>React</span>
          </div>
          <div className="flex gap-3">
            <img src={react} alt="" className="h-6 w-6" />
            <span>React</span>
          </div>
        </div>
      </section>{" "}
      <div className="w-full h-[1px] bg-gradient-to-r from-white to-slate-200"></div>{" "}
    </>
  );
}

export default Tech;
