import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import loadingAnimation from "../../assets/loading-animation.json";
import { useNavigate } from "react-router-dom";

function Loading({ mbtiScore, currentTest }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const navigate = useNavigate();
  const [finalQuery, setFinalQuery] = useState("");
  const loadingTime = 3700;

  useEffect(() => {
    const mbtiPairs = [
      ["E", "I"],
      ["S", "N"],
      ["T", "F"],
      ["J", "P"],
    ];

    let resultType = "";

    for (let pair of mbtiPairs) {
      let firstType = pair[0];
      let secondType = pair[1];
      let firstTypeScore = mbtiScore[firstType];
      let secondTypeScore = mbtiScore[secondType];

      firstTypeScore > secondTypeScore
        ? (resultType += firstType)
        : (resultType += secondType);
    }
    // console.log("resultType", resultType);

    const resultQuery = currentTest?.results?.find(
      (result) => result?.type === resultType
    )?.query;
    // console.log("resultQuery 1", resultQuery);

    setFinalQuery(resultQuery);
    // console.log("resultQuery", resultQuery);
  }, [mbtiScore, currentTest]);

  useEffect(() => {
    let timeout = setTimeout(() => {
      finalQuery &&
        navigate(`/${currentTest?.info?.mainUrl}/result/${finalQuery}`);
    }, loadingTime);
    // console.log("finalQuery", finalQuery);
    // console.log(
    //   "Navigation path:",
    //   `/${currentTest?.info?.mainUrl}/result/${finalQuery}`
    // );

    return () => clearTimeout(timeout);
  }, [loadingTime, finalQuery, navigate, currentTest?.info?.mainUrl]);

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        style={{ marginTop: "25rem" }}
      />
    </div>
  );
}

export default Loading;
