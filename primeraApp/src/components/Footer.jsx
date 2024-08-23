import React from "react";

function Footer() {
  return (
    <footer>
      <p className="text-center text-sm mt-4">
        Created by{" "}
        <a
          href="
              https://www.linkedin.com/in/reyner-mej%C3%ADas-36410b264/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Reyner Mejias
        </a>{" "}
        with{" "}
        <a
          href="https://www.weatherapi.com/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          WeatherAPI
        </a>
        .
      </p>
    </footer>
  );
}

export default Footer;
