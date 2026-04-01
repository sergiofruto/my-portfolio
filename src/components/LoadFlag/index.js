import React, { useState, useEffect } from "react";

const flagURL =
  "https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/616e67";

const LoadFlag = () => {
  const [flag, setFlag] = useState([]);
  const [typing, setTyping] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFlag = setTimeout(() => {
      fetch(flagURL)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response not ok");
          }
          return response.text();
        })
        .then((body) => setFlag(body.split("")))
        .catch((error) => console.log("Error fetching the flag"));
    }, 1000);

    return () => clearTimeout(fetchFlag);
  }, []);

  useEffect(() => {
    if (currentIndex < flag.length) {
      const timeout = setTimeout(() => {
        setTyping((prevText) => prevText + flag[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, flag]);

  return (
    <main
      style={{
        width: "100dvw",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        color: "#00FF41",
        fontFamily: "monospace",
      }}
    >
      {flag ? <h1>{typing}</h1> : <p>Loading...</p>}
    </main>
  );
};

export default LoadFlag;
