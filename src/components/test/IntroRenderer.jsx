import { useState } from "react";
import Intro from "./Intro";
import Quiz from "./Quiz";
import Loading from "./Loading";

function IntroRenderer({ currentTest }) {
  //점수판 (이 프로젝트에서는 상태관리 라이브러리를 별도로 사용하지 않을 것(복잡한 구조가 아니기 때문에. 하지만 상태관리가 복잡한 프로젝트에서는 redux,zustand 같은 상태관리를 사용)이므로 useState를 사용해서 점수판을 구현해보자.)
  const [mbtiScore, setMbtiScore] = useState({
    E: 0,
    I: 0,
    N: 0,
    S: 0,
    T: 0,
    F: 0,
    P: 0,
    J: 0,
  });

  const [mode, setMode] = useState("intro");

  if (mode === "intro") {
    return <Intro info={currentTest?.info} setMode={setMode} />;
  } else if (mode === "quiz") {
    return (
      <Quiz
        questions={currentTest?.questions}
        mbtiScore={mbtiScore}
        setMbtiScore={setMbtiScore}
        setMode={setMode}
      />
    );
  } else if (mode === "loading") {
    return <Loading mbtiScore={mbtiScore} currentTest={currentTest} />;
  } else {
    return <div>잘못된 페이지 입니다!.</div>;
  }
}

export default IntroRenderer;
