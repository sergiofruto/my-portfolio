import { useState, useEffect } from "react";

const DateTimeComponent = () => {
  const [formattedTime, setFormattedTime] = useState(
    new Date().toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
    })
  );
  const [formattedDate, setFormattedDate] = useState(
    new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  );

  const updateDateTime = () => {
    setFormattedTime(
      new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
      })
    );
    setFormattedDate(
      new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    );
  };

  useEffect(() => {
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full dark:text-white">
      <span className="text-2xl font-thin">{formattedTime}</span>
      <span className="text-md font-thin">{formattedDate}</span>
    </div>
  );
};

export default DateTimeComponent;
