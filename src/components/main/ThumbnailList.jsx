import { useState } from "react";
import { TESTS } from "../../data/TESTS";
import { Link } from "react-router-dom";
import { base_url } from "../../App";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function ThumbnailList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [testlist, setTestList] = useState(TESTS);

  useEffect(() => {
    const currentLanguage = searchParams.get("lang") || "Kor";
    const currentCategory = searchParams.get("category");

    if (currentCategory) {
      const filteredTest = TESTS.filter(
        (test) =>
          test?.info?.lang === currentLanguage &&
          test?.info?.category === currentCategory
      );
      setTestList(filteredTest);
    } else {
      const filteredTest = TESTS.filter(
        (test) => test?.info?.lang === currentLanguage
      );
      setTestList(filteredTest);
    }
  }, [searchParams]);

  return (
    <div>
      {/* 이 이미지를 누르면 해당 테스트 intro 페이지로 넘어가기 썸네일 이미지
      목록*/}

      {/* base_url/:testName 형식으로 넘어가기  템플릿 리터럴 형태로 넘김*/}

      {testlist?.map((test) => (
        <Link
          to={`${base_url}/${test?.info?.mainUrl}`}
          key={test?.info?.mainUrl}
        >
          {" "}
          {/* ($=백틱 이라고함, {} = curly bracket)템플릿 리터럴 형태로 넘김*/}
          <img
            style={{ width: "100%" }}
            src={test?.info?.thumbImage}
            alt={test?.info?.mainUrl}
          />
        </Link>
      ))}
    </div>
  );
}

export default ThumbnailList;
