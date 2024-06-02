import stansaresearch from "../assets/imagesPortofolio/Stansa-Research.jpg";
import wastewiseresearch from "../assets/imagesPortofolio/WasteWise-Research.jpg";
import designstansa from "../assets/imagesPortofolio/FinalDesign-STANSA.png";
import designwastewise from "../assets/imagesPortofolio/FinalDesign-WasteWise.png";
import designthreads from "../assets/imagesPortofolio/FinalDesign-Threads.png";
import designpelni from "../assets/imagesPortofolio/Final Design-Pelni.png";

const portfolioreseacrhItems = [
  {
    title: "RESEARCH STANSA",
    imgSrc: stansaresearch, // replace with actual path
    description:
      " By applying design thinking, platform developers can ensure that the platform is easy to use, useful, and meets farmers' needs, so that it can help improve the quality and productivity of agriculture in Indonesia.",
    alt: "Research STANSA",
    link: "https://www.figma.com/board/kr1MfPe7qWdjDoSjKYtRTB/Untitled?node-id=1-168&t=LYe9IAYUZdpYwED4-1", // add link here
  },
  {
    title: "RESEARCH WASTE WISE",
    imgSrc: wastewiseresearch, // replace with actual path
    description:
      "By applying design thinking, website developers can ensure that the website is easy to use, attractive, and encourages active community participation, so that it can help improve waste management in Indonesia.",
    alt: "Researcg WASTE WISE",
    link: "https://www.figma.com/board/HhzocDTG3pjOS3cIwfZze6/Group-2--Massive---Lighter?node-id=0-1&t=Ra1Nir6vgAOZva5S-1", // add link here
  },
];
const portfoliodesignItems = [
  {
    title: "Design Website STANSA",
    imgSrc: designstansa, // replace with actual path
    description:
      "The process of designing the STANSA website is like a creative journey that starts with rough sketches (low-fidelity) in Figma, a powerful and flexible design tool. These sketches are then refined into more detailed and interactive designs (high-fidelity) with color selection , typography and images that match the STANSA brand identity. Implementing a design system is the key to consistency and ease in website development. Reusable elements, such as buttons, forms and icons, ensure that the website design looks neat and structured.",
    alt: "Design Website STANSA",
    link: "https://www.figma.com/design/f1jqgui7QFad4B2b69DbIm/HIFI-%26-LOFI-Waste-Wise?node-id=1-5&t=4qmaCWVcFw8RR1nn-1https://www.figma.com/design/hHZHD8i8YSyI7X0epnsxt0/HIFI-%26-LOFI-Project?node-id=547-1369&t=szUwLPmZviujUTJ1-1",
  },
  {
    title: "Design Website WASTE WISE",
    imgSrc: designwastewise, // replace with actual path
    description:
      "The process of designing the STANSA website is like a creative journey that starts with rough sketches (low-fidelity) in Figma, a powerful and flexible design tool. These sketches are then refined into more detailed and interactive designs (high-fidelity) with color selection , typography, and images that match WasteWise's brand identity. Implementing a design system is the key to consistency and ease in website development. Reusable elements, such as buttons, forms, and icons, ensure the website design looks neat and structured.",
    alt: "Design Website WasteWise",
    link: "https://www.figma.com/design/f1jqgui7QFad4B2b69DbIm/HIFI-%26-LOFI-Waste-Wise?node-id=1-5&t=4qmaCWVcFw8RR1nn-1",
  },
  {
    title: "Design Clone Threads Mobile",
    imgSrc: designthreads, // replace with actual path
    description:
      "The process of designing clone Threads with the aim of Learning with real examples",
    alt: "Design Clone Threads Mobile",
    link: "https://www.figma.com/design/XfVXUVvIm8IhANqHzWj0Yg/Threads-Project?node-id=40-531&t=6tRnTTs9prxth8MM-1",
  },
  {
    title: "Design Pelni Mobile",
    imgSrc: designpelni, // replace with actual path
    description:
      "The process of designing clone Threads with the aim of learning with real examples and updating features that don't exist and features that are not needed",
    alt: "Design Pelni Mobile",
    link: "https://www.figma.com/design/yhakgxoawaaHZh5g1ZRIpa/Untitled?node-id=30-102&t=gKqgIvSLj43jFOoN-1",
  },
];
const portfoliofrontendItems = [
  {
    title: "Website STANSA",
    imgSrc: designstansa, // replace with actual path
    description:
      "A platform that helps farmers in Indonesia to obtain information & education by providing digital training services and facilitating agricultural communities (forums). With the aim of improving the quality and productivity of agriculture in Indonesia.",
    alt: "Website STANSA",
    link: "https://bimaadityarahmana.github.io/arunacode.github.io/",
  },
  {
    title: "Website WASTE WISE",
    imgSrc: designwastewise, // replace with actual path
    description:
      "A website that helps encourage active community participation in creative and sustainable waste management. By combining an educational article program, a Waste Bank program with a reward point collection system, and a program for sharing ideas, tutorials and DIY projects in recycling waste.",
    alt: "Website WASTE WISE",
    link: "",
  },
];

const Portfolio = () => {
  return (
    <>
      {/* Portofolio Research */}
      <section id="portofolio" className="lg:pt-36 pb-16 w-full">
        <div className="container mx-auto px-4">
          <div className="w-full text-center mb-16">
            <h1 className="font-semibold text-primary text-lg mb-2 uppercase">
              Portfolio
            </h1>
            <h2 className="font-bold text-2xl text-dark mb-4 uppercase sm:text-3xl lg:text-4xl">
              Project Website Research UI / UX
            </h2>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:mx-auto xl:w-10/12">
          {portfolioreseacrhItems.map((item, index) => (
            <div key={index} className="mb-12 p-4 md:w-1/2">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="rounded-md shadow-md overflow-hidden hover:shadow-lg transition">
                  <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className="w-[400px] h-[300px] transition-transform transform hover:translate-x-2"
                  />
                </div>
                <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                  {item.title}
                </h3>
              </a>
              <p className="font-medium text-base text-primary text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portofolio Design */}
      <section id="portfolio" className="lg:pt-36 pb-16 w-full">
        <div className="container mx-auto px-4">
          <div className="w-full text-center mb-16">
            <h1 className="font-semibold text-primary text-lg mb-2 uppercase">
              Portfolio
            </h1>
            <h2 className="font-bold text-2xl text-dark mb-4 uppercase sm:text-3xl lg:text-4xl">
              Project Design UI / UX
            </h2>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:mx-auto xl:w-10/12">
          {portfoliodesignItems.map((item, index) => (
            <div key={index} className="mb-12 p-4 md:w-1/2">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="rounded-md shadow-md overflow-hidden hover:shadow-lg transition">
                  <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className=" w-fit h-[300px] mx-auto transition-transform transform hover:translate-x-2"
                  />
                </div>
                <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                  {item.title}
                </h3>
              </a>
              <p className="font-medium text-base text-primary text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portofolio Frontend */}
      <section id="portfolio" className="lg:pt-36 pb-16 w-full">
        <div className="container mx-auto px-4">
          <div className="w-full text-center mb-16">
            <h1 className="font-semibold text-primary text-lg mb-2 uppercase">
              Portfolio
            </h1>
            <h2 className="font-bold text-2xl text-dark mb-4 uppercase sm:text-3xl lg:text-4xl">
              Project Website Frontend
            </h2>
          </div>
        </div>
        <div className="w-full px-4 flex flex-wrap justify-center xl:mx-auto xl:w-10/12">
          {portfoliofrontendItems.map((item, index) => (
            <div key={index} className="mb-12 p-4 md:w-1/2">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="rounded-md shadow-md overflow-hidden hover:shadow-lg transition">
                  <img
                    src={item.imgSrc}
                    alt={item.alt}
                    className="w-full transition-transform transform hover:translate-x-2"
                  />
                </div>
                <h3 className="font-semibold text-xl text-dark mt-5 mb-3">
                  {item.title}
                </h3>
              </a>
              <p className="font-medium text-base text-primary text-justify">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
