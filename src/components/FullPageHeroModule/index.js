const FullPageHeroModule = ({ image, title, subtitle, paddingTop }) => {
  const sectionStyle = {
    backgroundImage: image ? `url(${image})` : "",
    paddingTop: paddingTop ? `${paddingTop}` : "",
    minHeight: "100vw",
  };

  return (
    <section
      className="w-full min-h-screen bg-top bg-cover bg-dunes bg-no-repeat"
      style={sectionStyle}
    >
      <div>
        <h1 className="text-center font-light text-4xl text-black py-6 px-2">
          {title ? title : "Placeholder"}
        </h1>
      </div>
    </section>
  );
};

export default FullPageHeroModule;
