// @ts-ignore
import ModalImage from "react-modal-image";

const myWorks = [
  {
    title: "Auth0",
    subtitle: "Website, Blog, Apps",
    description: "PDP Auth0",
    image: "/my-work-assets/autho-demo-01.png",
  },
  {
    title: "Scale AI",
    subtitle: "Website, Blog",
    description: "Scale AI Homepage",
    image: "/my-work-assets/scale-demo-1.png",
  },
  {
    title: "My Work 3",
    subtitle: "Website, Blog, Apps",
    description: "My Work 3 Description",
    image: "https://dummyimage.com/720x600",
  },
  {
    title: "My Work 4",
    subtitle: "Website, Blog, Apps",
    description: "My Work 4 Description",
    image: "https://dummyimage.com/720x600",
  },
];

const MyWork = () => {
  return (
    <section className="dark text-white bg-sky-950 body-font">
      {myWorks.map((work, index) => (
        <div
          key={`${index} ${work.title}`}
          className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
        >
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {work.title}
            </h1>
            <h2 className="font-base font-bold">{work.subtitle}</h2>
            <p className="mb-8 leading-relaxed">{work.description}</p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <ModalImage
              small={work.image}
              large={work.image}
              alt="Hello World!"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyWork;
