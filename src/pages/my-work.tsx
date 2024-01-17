// @ts-ignore
import ModalImage from "react-modal-image";

const myWorks = [
  {
    title: "Auth0",
    subtitle: "Website, Blog, Apps",
    description: "PDP Auth0",
    imageSmall: "/my-work-assets/auth0-image-small.jpg",
    imageLarge: "/my-work-assets/auth0-image-large.jpg",
  },
  {
    title: "Scale AI",
    subtitle: "Website, Blog",
    description: "Scale AI Homepage",
    imageSmall: "/my-work-assets/scale01-image-small.jpg",
    imageLarge: "/my-work-assets/scale01-image-large.jpg",
  },
];

const MyWork = () => {
  return (
    <section className="dark text-white bg-gray-900 body-font">
      {myWorks.map((work, index) => (
        <div
          key={`${index} ${work.title}`}
          className="container max-w-5xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              {work.title}
            </h1>
            <h2 className="font-base font-bold">{work.subtitle}</h2>
            <p className="mb-8 leading-relaxed">{work.description}</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <div className="image-wrapper rounded-xl overflow-hidden">
              <ModalImage
                small={work.imageSmall}
                large={work.imageLarge}
                alt="Hello World!"
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyWork;
