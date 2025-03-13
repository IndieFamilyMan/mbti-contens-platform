import { useParams } from "react-router-dom";
import {useEffect } from "react";
import { TESTS } from "../data/TESTS";
import { useNavigate } from "react-router-dom";
import IntroRenderer from "../components/test/IntroRenderer";
import { useState } from "react";
function Test() {
  const { testParam } = useParams();
  const navigate = useNavigate();
  const [currentTest, setCurrentTest] = useState({});
  
  useEffect(() => {
    // 1 testParam 이 우리 db 에 존재하는가 필터링
    // 2 존재하면 테스트 페이지로 이동 (해당 테스트의 콘텐츠를 렌더링)
    // 3 존재하지 않으면 안내/home routing
    console.log(testParam);

    const theTest = TESTS ?.find((test) => test ?.info ?.mainUrl === testParam);
    if (!theTest) {
      navigate('/');
    }
    setCurrentTest(theTest);
  }, [testParam, navigate]);

  return <div><IntroRenderer currentTest={currentTest} /></div>;
}

export default Test;
