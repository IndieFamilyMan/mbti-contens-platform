import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Test from "./page/Test";
import TestResult from "./page/TestResult";
import ReactGA4 from "react-ga4";
export const base_url = "https://ezlivingtips.com/";

function App() {
  useEffect(() => {
    ReactGA4.initialize([
      {
        trackingId: "G-51XJWKYPFB",
        gaOptions: {
          siteSpeedSampleRate: 100,
        },
      },
    ]);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<Main />} />

        {/* 테스트 페이지 */}
        <Route path="/:testParam" element={<Test />} />

        {/* 테스트 결과 페이지 */}
        <Route
          path="/:testParam/result/:resultParam"
          element={<TestResult />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
