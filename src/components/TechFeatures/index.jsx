import { BsUsbC } from "react-icons/bs";
import { MdScreenshotMonitor } from "react-icons/md";
import { MdOutlineWifi } from "react-icons/md";

const techFeaturesList = [
  {
    title: "USB Type C",
    description:
      "USB-C is an industry-standard connector for transmitting both data and power on a single cable.",
    icon: "BsUsbC", // Use the actual component instead of the string
  },
  {
    title: "LED Screen",
    description: "Size of the screen",
    icon: "MdScreenshotMonitor", // Use the actual component instead of the string
  },
  {
    title: "WIFI 6.0",
    description: "Size of the screen",
    icon: "MdOutlineWifi", // Use the actual component instead of the string
  },
  // Add more features as needed
];

const getIconComponent = (iconName) => {
  switch (iconName) {
    case "BsUsbC":
      return <BsUsbC />;
    case "MdScreenshotMonitor":
      return <MdScreenshotMonitor />;
    case "MdOutlineWifi":
      return (
        <MdOutlineWifi fill="rgb(203, 213, 225)" color="rgb(203, 213, 225)" />
      );
    // Add more cases for other icons
    default:
      return null; // Return null for unsupported icon names
  }
};

const TechFeatures = () => {
  return (
    <div className="tech-features-list flex gap-4">
      {techFeaturesList.map((feature) => (
        <div
          className="tech-features-list__item flex flex-col items-center justify-center"
          key={feature.title}
        >
          <div className="tech-features-list__icon w-8 mx-auto flex items-center justify-center">
            {getIconComponent(feature.icon)}
          </div>
          <div className="tech-features-list__content">
            <h3 className="text-xs font-thin text-slate-300">
              {feature.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechFeatures;
