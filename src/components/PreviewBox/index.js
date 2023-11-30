import React, { useState } from "react";
import Frame, { useFrame } from "react-frame-component";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function PreviewBox({
  isBad,
  isGood,
  children,
  disableFullscreen,
  limitWidth,
  ...props
}) {
  const [fullscreen, setFullscreen] = useState(false);
  const { siteConfig } = useDocusaurusContext();
  const { baseUrl } = siteConfig;

  const InnerComponent = () => {
    // Hook returns iframe's window and document instances from Frame context
    const { document } = useFrame();

    new Promise((resolve) => {
      const existingScript = document.getElementById("uswds-script");
      if (existingScript) return resolve();
      const script = document.createElement("script");
      script.src = `https://unpkg.com/uswds@latest/dist/js/uswds.min.js`;
      script.id = "uswds-script";
      script.defer = "true";
      document.body.appendChild(script);
      script.onload = () => {
        resolve();
      };
    });

    return children;
  };

  return (
    <div
      className="preview-box-wrapper"
      style={
        limitWidth
          ? { width: limitWidth, display: "table", margin: "0 auto" }
          : {}
      }
    >
      {!disableFullscreen && (
        <button
          aria-label={
            fullscreen ? "Minimize the example" : "Fullscreen the example"
          }
          className="preview-box-fullscreen-toggle"
          onClick={(e) => {
            const elem = e.target.closest(".preview-box-wrapper");

            if (fullscreen) {
              // exit fullscreen
              if (document.exitFullscreen) {
                document.exitFullscreen();
              } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
              } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
              }
            } else {
              // enter fullscreen
              if (elem.requestFullscreen) {
                elem.requestFullscreen();
              } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
              } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
              }
            }

            setFullscreen(!fullscreen);
          }}
        >
          {fullscreen ? (
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 24 24"
            >
              <path d="M19.707 18.293a1 1 0 01-1.414 1.414L16 17.414V18a1 1 0 01-2 0v-3a1 1 0 011-1h3a1 1 0 010 2h-.586zM9 14H6a1 1 0 000 2h.586l-2.293 2.293a1 1 0 001.414 1.414L8 17.414V18a1 1 0 002 0v-3a1 1 0 00-1-1zm0-9a1 1 0 00-1 1v.586L5.707 4.293a1 1 0 00-1.414 1.414L6.586 8H6a1 1 0 000 2h3a1 1 0 001-1V6a1 1 0 00-1-1zm6 5h3a1 1 0 000-2h-.586l2.293-2.293a1 1 0 00-1.414-1.414L16 6.586V6a1 1 0 00-2 0v3a1 1 0 001 1z"></path>
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="26 26 48 48"
            >
              <path d="M54.347 57.882A8.96 8.96 0 0150 59a8.96 8.96 0 01-4.347-1.118L40.736 62.8c-.38.38-.257.701.29.701h.98A2.503 2.503 0 0144.5 66c0 1.39-1.122 2.5-2.507 2.5h-7.986a2.505 2.505 0 01-2.507-2.507v-7.986A2.502 2.502 0 0134 55.5a2.49 2.49 0 012.5 2.493v.98c0 .547.314.678.7.29l4.918-4.916A8.96 8.96 0 0141 50a8.96 8.96 0 011.118-4.347L37.2 40.736c-.38-.38-.701-.257-.701.29v.98A2.503 2.503 0 0134 44.5c-1.39 0-2.5-1.122-2.5-2.507v-7.986a2.505 2.505 0 012.507-2.507h7.986A2.502 2.502 0 0144.5 34a2.49 2.49 0 01-2.493 2.5h-.98c-.547 0-.678.314-.29.7l4.916 4.918A8.96 8.96 0 0150 41a8.96 8.96 0 014.347 1.118l4.917-4.917c.38-.38.257-.701-.29-.701h-.98A2.503 2.503 0 0155.5 34c0-1.39 1.122-2.5 2.507-2.5h7.986a2.505 2.505 0 012.507 2.507v7.986A2.502 2.502 0 0166 44.5a2.49 2.49 0 01-2.5-2.493v-.98c0-.547-.314-.678-.7-.29l-4.918 4.916A8.96 8.96 0 0159 50a8.96 8.96 0 01-1.118 4.347l4.917 4.917c.38.38.701.257.701-.29v-.98A2.503 2.503 0 0166 55.5c1.39 0 2.5 1.122 2.5 2.507v7.986a2.505 2.505 0 01-2.507 2.507h-7.986A2.502 2.502 0 0155.5 66a2.49 2.49 0 012.493-2.5h.98c.547 0 .678-.314.29-.7l-4.916-4.918zM50 54a4 4 0 100-8 4 4 0 000 8z"></path>
            </svg>
          )}
        </button>
      )}
      <Frame
        head={
          <>
            <link
              rel="stylesheet"
              href="https://unpkg.com/uswds@latest/dist/css/uswds.min.css"
            />
          </>
        }
        width="100%"
        className={`docus-preview-box${fullscreen ? " is-fullscreen" : ""}`}
        {...props}
      >
        <InnerComponent />
      </Frame>
    </div>
  );
}
