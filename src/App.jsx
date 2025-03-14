import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Test from "./page/Test";
import TestResult from "./page/TestResult";
import ReactGA4 from "react-ga4";
export const base_url = "https://ezlivingtips.com/";
import { useEffect } from "react";

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

// 주소 체계
// 1. 메인 썸네일 리스트 페이지 : root/
// 2. 테스트 페이지 - Intro / Quiz / Loading : root/:testName
// 3. 결과 페이지 : root/:testName/result/:resultName

// Test Start Button(Intro)
// Copy Test Link Button(Intro, Result)
// Go-to-another Test Button(Result)
// Go-to-Other Tests Button(Intro, Result)

// SPA(Single Page Application ) & CSR(Client Side-Rendering)
// html + Javascript -> (Page 1 -> Metatag 1)
// =>
// page 마다 -> A.html / B.html / C.html, ...
