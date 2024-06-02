import potoformal from "../assets/ImagesHome/potoFormal.jpg";

export const Home = () => {
  return (
    <>
      <section id="home" className="pt-32 lg:mt-16">
        <div className="container mx-auto px-4 items-center">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-medium text-primary md:text-xl lg:text-5xl">
                Hello Everyone 🐱‍🐉
                <span className="text-4xl block font-bold text-dark mt-2 lg:text-4xl">
                  I`m Fisi Shella Hayagi Ramadhana
                </span>
              </h1>
              <h2 className="font-medium text-slate-500 text-lg mb-5 lg:text-lg">
                As a passionate IT student, I am looking for internship
                opportunities as a Front End Developer and UI UX Designer to
                hone my practical skills.
              </h2>

              <a
                className="animate-pulse bg-primary py-3 px-8 text-white rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out"
                href="resume/Fisi%20Shella%20Hayagi%20R_50421528_KA_M5.pdf"
                download="FisishellaHR-Portofolio"
              >
                Let`s See My CV
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2 flex justify-center lg:justify-end mt-6 lg:mt-0">
              <img
                src={potoformal}
                alt=""
                className="w-48 md:w-64 lg:w-80 rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
