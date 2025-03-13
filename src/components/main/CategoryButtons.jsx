import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CategoryButtons.module.css";

function CategoryButtons() {
  const [searchParams] = useSearchParams();
  const [language, setLanguage] = useState("Kor");
  const navigate = useNavigate();

  useEffect(() => {
    const currentLang = searchParams.get("lang") || "Kor";
    setLanguage(currentLang);
  }, [searchParams]);

  const onCategoryButtonClick = (category) => {
    if (category === "all") {
      navigate(`/?lang=${language}`);
    } else if (category === "love" || category === "personality") {
      navigate(`/?lang=${language}&category=${category}`);
    } else {
      alert("잘못된 페이지 입니다.");
      navigate(`/`);
    }
  };

  return (
    <div>
      <button
        className={styles.categoryButton}
        onClick={() => onCategoryButtonClick("all")}
      >
        전체
      </button>
      <button
        className={styles.categoryButton}
        onClick={() => onCategoryButtonClick("love")}
      >
        연애
      </button>
      <button
        className={styles.categoryButton}
        onClick={() => onCategoryButtonClick("personality")}
      >
        성격
      </button>
    </div>
  );
}

export default CategoryButtons;
