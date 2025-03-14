import React from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { base_url } from "../../App";
import { LinkOutlined, HomeOutlined } from "@ant-design/icons";
import style from "./IntroButtonGroup.module.css";
import { useNavigate } from "react-router-dom";
import { eventSenderGA } from "../../tools/tools";

const IntroButtonGroup = ({ testParam, lang }) => {
  const navigate = useNavigate();
  const [copyUrl, copyUrlResult] = useCopyToClipboard();

  const onClickCopyUrlButton = (testParam) => {
    eventSenderGA("Copy", "Copy test link", "Intro");
    copyUrlResult(`${base_url}/${testParam}`);
    alert("링크가 복사되었습니다.");
  };

  const onClickGoHomeButton = () => {
    eventSenderGA("Paging", "Go to home", "Intro");
    navigate("/");
  };

  return (
    <div>
      <div>
        <button
          className={style.upperButton}
          onClick={() => onClickCopyUrlButton(testParam)}
        >
          <LinkOutlined />
          &nbsp;링크 복사
        </button>
      </div>
      <div>
        <button className={style.bottomButton} onClick={onClickGoHomeButton}>
          <HomeOutlined /> &nbsp;다른 테스트 하러 가기
        </button>
      </div>
    </div>
  );
};

export default IntroButtonGroup;
