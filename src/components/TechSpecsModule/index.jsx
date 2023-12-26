const featuresArray = [
  { feature: "Frequency Range", value: "52 – 25000 Hz" },
  { feature: "Dimensions", value: "232.5 x 284 x 57.5 mm" },
  { feature: "Weight", value: "1.7 kg" },
  {
    feature: "Materials",
    value: "Amorphous polymer, Glass fibre reinforced pc, Milled aluminium",
  },
  {
    feature: "Design Features",
    value:
      "Fine pitch tweeter grille, Gel dampened handle, Custom direct drive volume knob and tape dial",
  },
  {
    feature: "Max SPL @ 1 m stereo configuration",
    value: "92 dB unsupported wideband",
  },
  { feature: "Bass capability @ 1 m", value: "104 dB SPL supported" },
  { feature: "Active Crossover Frequency", value: "3.5 kHz" },
  { feature: "Configuration", value: "Stereo 2 + 2" },
  {
    feature: "Tweeter",
    value: "High efficiency ferrofluid cooled neodymium driver",
  },
  {
    feature: "Woofer",
    value: "Long throw high power capacity neodymium driver",
  },
  { feature: "Amplifier", value: "2 x 38 W, Ultra high efficiency class D" },
  {
    feature: "Wireless",
    value: "Bluetooth® classic (AAC), Bluetooth® 5 LE, FM radio",
  },
  { feature: "Inputs", value: "3.5 mm stereo in (2.8 Vpp for 0 dBFS)" },
  {
    feature: "Battery Life",
    value: "Normal volume FM: 72 hours, Bluetooth high volume: 8 hours",
  },
];

const TechSpecsModule = () => {
  return (
    <section className="tech-specs py-12 px-4">
      <div className="container mx-auto flex">
        <h2 className="tech-specs__title w-1/4 text-4xl font-thin">
          Tech Specs
        </h2>
        <div className="tech-specs__container w-3/4 grid grid-cols-3 gap-5">
          {featuresArray.map((feature, index) => (
            <div className="tech-specs__item" key={index}>
              <h4 className="tech-specs__feature text-sm font-light">
                {feature.feature}
              </h4>
              <p className="tech-specs__value text-sm font-thin">
                {feature.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSpecsModule;
