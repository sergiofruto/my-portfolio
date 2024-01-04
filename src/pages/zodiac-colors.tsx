import React from "react";
import ZodiacColorModule from "../components/ZodiacColorModule";

const ZodiacColors = [
  {
    Sign: "Aries",
    Colors: ["#FF0000", "#FF3300", "#FF6600", "#FF9900", "#FFCC00"],
    Element: "Fire",
    Planet: "Mars",
  },
  {
    Sign: "Taurus",
    Colors: ["#228B22", "#32CD32", "#6B8E23", "#556B2F", "#8FBC8F"],
    Element: "Earth",
    Planet: "Venus",
  },
  {
    Sign: "Gemini",
    Colors: ["#FFFF00", "#FFFF33", "#FFFF66", "#FFFF99", "#FFFFCC"],
    Element: "Air",
    Planet: "Mercury",
  },
  {
    Sign: "Cancer",
    Colors: ["#C0C0C0", "#D3D3D3", "#DCDCDC", "#E8E8E8", "#F5F5F5"],
    Element: "Water",
    Planet: "Moon",
  },
  {
    Sign: "Leo",
    Colors: ["#FFD700", "#FFDB58", "#FFDF00", "#FFEC8B", "#FFFACD"],
    Element: "Fire",
    Planet: "Sun",
  },
  {
    Sign: "Virgo",
    Colors: ["#8B4513", "#A0522D", "#CD853F", "#DEB887", "#F5F5DC"],
    Element: "Earth",
    Planet: "Mercury",
  },
  {
    Sign: "Libra",
    Colors: ["#87CEEB", "#ADD8E6", "#B0E0E6", "#BFEFFF", "#CAE1FF"],
    Element: "Air",
    Planet: "Venus",
  },
  {
    Sign: "Scorpio",
    Colors: ["#8B0000", "#A52A2A", "#B22222", "#CD5C5C", "#DC143C"],
    Element: "Water",
    Planet: "Pluto",
  },
  {
    Sign: "Sagittarius",
    Colors: ["#800080", "#9932CC", "#8A2BE2", "#9370DB", "#AB82FF"],
    Element: "Fire",
    Planet: "Jupiter",
  },
  {
    Sign: "Capricorn",
    Colors: ["#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#DCDCDC"],
    Element: "Earth",
    Planet: "Saturn",
  },
  {
    Sign: "Aquarius",
    Colors: ["#00BFFF", "#1E90FF", "#4169E1", "#4682B4", "#87CEEB"],
    Element: "Air",
    Planet: "Uranus",
  },
  {
    Sign: "Pisces",
    Colors: ["#20B2AA", "#5F9EA0", "#66CDAA", "#76D7C4", "#8FBC8B"],
    Element: "Water",
    Planet: "Neptune",
  },
];

const ZodiacApp: React.FC = () => {
  return (
    <div>
      {ZodiacColors.map((sign, index) => (
        <ZodiacColorModule key={index} sign={sign} />
      ))}
    </div>
  );
};

export default ZodiacApp;
