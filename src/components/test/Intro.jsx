import React from "react";
import IntroButtonGroup from "./IntroButtonGroup";
import { eventSenderGA } from "../../tools/tools";
function Intro({ info, setMode }) {
  const onImageClick = () => {
    eventSenderGA("Paging", "test-start-button", "Intro");
    setMode("quiz");
  };
  return (
    <div>
      <h1>{info?.mainTitle}</h1>
      <h3>{info?.subTitle}</h3>
      <img
        onClick={onImageClick}
        style={{ width: "100%", cursor: "pointer" }}
        src={info?.mainImage}
        alt={info?.mainTitle}
      />
      <p>
        <span style={{ fontWeight: "bold", fontSize: "1.2rem", color: "#000" }}>
          {info?.mainTitle}
        </span>
        로 여러분의 성향을 테스트 해보세요!
      </p>
      <IntroButtonGroup testParam={info?.mainUrl} lang={info?.lang} />
    </div>
  );
}

export default Intro;
