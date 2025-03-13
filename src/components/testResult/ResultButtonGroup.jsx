import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { base_url } from "../../App";
import { HomeOutlined, LinkOutlined, RedoOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import style from "./ResultButtonGroup.module.css";

const ResultButtonGroup = ({ testParam, resultParam }) => {
  const navigate = useNavigate();
  const onClickRedoButton = () => {
    navigate(`/${testParam}`);
  };
  const onClickGoHomeButton = () => {
    navigate("/");
  };

  return (
    <div className={style.mainDiv}>
      <div className={style.upperDiv}>
        <CopyToClipboard
          text={`${base_url}/${testParam}/result/${resultParam}`}
        >
          <button
            className={style.upperButton}
            onClick={() => {
              alert("링크가 복사되었습니다.");
            }}
          >
            <LinkOutlined />
            &nbsp;링크 복사
          </button>
        </CopyToClipboard>
        <button className={style.upperButton} onClick={onClickRedoButton}>
          <RedoOutlined /> &nbsp;다시 하기
        </button>
      </div>
      <div className={style.bottomDiv}>
        <button className={style.bottomButton} onClick={onClickGoHomeButton}>
          <HomeOutlined /> &nbsp;다른 테스트 하러 가기
        </button>
      </div>
    </div>
  );
};

export default ResultButtonGroup;
