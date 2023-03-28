// import "./fonts/Recoleta-Bold.woff2";
import "../fonts/Recoleta-Bold.woff2";
function Hero() {
  return (
    <>
      <main className="px-5 py-32 md:pt-56  xl:pt-72 max-w-6xl mx-auto xl:px-0  ">
        <h1 className="font-[Recoleta] font-[900] text-4xl sm:text-5xl md:text-6xl leading-[1.3] sm:leading-[1.3] md:leading-[1.4] xl:leading-[1.2]  max-w-4xl mb-3">
          <span>Hi there 👋🏽, I'm Faith,</span>
          <span className="block">
            a Frontend web Developer & Technical Writer
          </span>
        </h1>
        {/* <p className="leading-[1.6] lg:leading-[1.7] font-openSans max-w-4xl text-lg lg:text-[22px] font-normal">
          Hi there 👋🏽. I'm Faith Oloninayin, a product designer with 3+ years of
          experience, creating digital experiences that make both users and
          businesses happy.
        </p> */}
        <button className="font-[Recoleta] text-lg mt-10 lg:text-xl font-semibold bg-gradient-to-r from-red-900 to-blue-900 px-8 text-white md:px-12 rounded-full py-4 cta">
          Contact Me
        </button>
      </main>
      <div className="w-full h-[1px] bg-gradient-to-r from-black to-slate-500"></div>
    </>
  );
}

export default Hero;
