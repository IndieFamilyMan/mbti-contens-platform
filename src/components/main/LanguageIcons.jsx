import { CircleFlag } from "react-circle-flags";
import { useNavigate } from "react-router-dom";
import styles from "./LanguageIcons.module.css";

function LanguageIcons() {
  const navigate = useNavigate();
  const onButtonClick = (lang) => {
    navigate(`/?lang=${lang}`);
  };

  return (
    <div>
      <CircleFlag
        className={styles.flagIcon}
        countryCode="kr"
        width={48}
        onClick={() => onButtonClick("Kor")}
      />
      <CircleFlag
        className={styles.flagIcon}
        countryCode="us"
        width={48}
        onClick={() => onButtonClick("Eng")}
      />
      <CircleFlag
        className={styles.flagIcon}
        countryCode="jp"
        width={48}
        onClick={() => onButtonClick("JP")}
      />
    </div>
  );
}

export default LanguageIcons;
