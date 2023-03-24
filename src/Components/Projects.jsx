import luxoria from "../assets/LuxoriaImage.png";
import xoxo from "../assets/xoxoImage.png";
function Projects() {
  return (
    <section className="px-5 py-16 md:pt-6  xl:pt-36 max-w-6xl mx-auto xl:px-0">
      <h2 className="font-[Recoleta] font-[900] text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[1.3] sm:leading-[1.3] md:leading-[1.4] xl:leading-[1.2]  max-w-4xl mb-1 ">
        Projects
      </h2>
      <p className="text-gray-500 font-openSans text-xl mb-10">
        Some projects I have worked on..
      </p>
      <div className="flex flex-wrap">
        <div className="w-full max-w-sm lg:max-w-lg">
          <img src={luxoria} alt="" className="w-full rounded" />
          <div className="border-gray-100 border-x border-b rounded w-full py-12 pl-3">
            <p className="font-[Recoleta] text-lg lg:text-3xl text-gray-600 mb-4">
              Luxoria
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              quibusdam. Veniam nam recusandae, inventore quia beatae possimus
            </p>
          </div>
        </div>
        <div className="w-full max-w-sm lg:max-w-lg">
          <img src={xoxo} alt="" className="w-full rounded" />
          <div className=" border-gray-100 border-x border-b rounded w-full py-12 pl-3">
            <p className="font-[Recoleta] text-lg lg:text-3xl text-gray-600 mb-4">
              Luxoria
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              quibusdam. Veniam nam recusandae, inventore quia beatae possimus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
