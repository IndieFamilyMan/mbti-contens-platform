import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./page/Main";
import Test from "./page/Test";
import TestResult from "./page/TestResult";

export const base_url = "http://localhost:5173";

function App() {
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
