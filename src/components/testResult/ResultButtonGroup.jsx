import React from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { base_url } from "../../App";
import { HomeOutlined, LinkOutlined, RedoOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import style from "./ResultButtonGroup.module.css";
import { eventSenderGA } from "../../tools/tools";

const ResultButtonGroup = ({ testParam, resultParam }) => {
  const navigate = useNavigate();
  const onClickRedoButton = () => {
    eventSenderGA("Paging", "Redo test", "Result");
    navigate(`/${testParam}`);
  };
  const onClickGoHomeButton = () => {
    eventSenderGA("Paging", "Go to home", "Result");
    navigate("/");
  };
  const onClickCopyUrlButton = () => {
    eventSenderGA("Copy", "Copy result link", "Result");
    alert("링크가 복사되었습니다.");
  };
  return (
    <div className={style.mainDiv}>
      <div className={style.upperDiv}>
        <useCopyToClipboard
          text={`${base_url}/${testParam}/result/${resultParam}`}
        >
          <button className={style.upperButton} onClick={onClickCopyUrlButton}>
            <LinkOutlined />
            &nbsp;링크 복사
          </button>
        </useCopyToClipboard>
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
