import TestResultRenderer from "../components/testResult/TestResultRenderer";
import ShareButtonGroup from "../components/testResult/ShareButtonGroup";
import ResultButtonGroup from "../components/testResult/ResultButtonGroup";
import ResultThumbnailList from "../components/testResult/ResultThumbnailList";
import { TESTS } from "../data/TESTS";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function TestResult() {
  const navigate = useNavigate();
  const { testParam, resultParam } = useParams();
  const [renderResultInfo, setRenderResultInfo] = useState({});
  const [renderTestInfo, setRenderTestInfo] = useState({});
  // const params = useParams();

  useEffect(() => {
    // console.log(params);
    console.log(testParam, resultParam);

    const testInfo = TESTS.find((test) => test.info.mainUrl === testParam);
    setRenderTestInfo(testInfo);
    if (!testInfo) {
      alert("존재하지 않는 테스트입니다.");
      navigate("/");
    }
    // console.log(testInfo);

    const resultInfo = testInfo?.results.find(
      (result) => result.type === resultParam
    );
    // console.log(resultInfo);

    if (!resultInfo) {
      alert("존재하지 않는 결과입니다.");
      navigate(`/${testParam?.info?.mainUrl}`);
    }

    setRenderResultInfo(resultInfo);
  }, [testParam, resultParam, navigate]);

  return (
    <div>
      <TestResultRenderer renderResultInfo={renderResultInfo} />
      <ShareButtonGroup
        testParam={testParam}
        resultParam={resultParam}
        renderTestInfo={renderTestInfo}
      />
      <ResultButtonGroup
        testParam={testParam}
        resultParam={resultParam}
        renderTestInfo={renderTestInfo}
      />
      <ResultThumbnailList testParam={testParam} />
    </div>
  );
}

export default TestResult;
