const copy = {
  title: "Central Text Module",
  description: "This is a central text module.",
  body: `OD-11 is compatible with all music and connectivity
 services, including AirPlay 2, for multiroom and stereo pairing. 
stream your favorite music at home, bring it on your holiday and
 listen offline in cabin mode. connect any instrument, turntable, 
gaming console or tv, for a rich sound experience.`,
  cta: "Buy this",
};

const CentralTextModule = () => {
  return (
    <section className="central-text-module py-12 px-4">
      <div className="container flex">
        <div className="w-full text-center max-w-5xl mx-auto">
          <h2 className="text-4xl font-thin mb-8">{copy.title}</h2>
          {/* <p className="central-text-module__description text-sm font-thin">
            {copy.description}
          </p> */}
          <p className="central-text-module__body mb-4 text-md font-thin">
            {copy.body}
          </p>
          <button className="pb-2 text-xl font-thin underline">
            {copy.cta}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CentralTextModule;
