import React from "react";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { TwitterShareButton } from "react-share";
import { XIcon } from "react-share";
import { base_url } from "../../App";
import styles from "./ShareButtonGroup.module.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShareButtonGroup = ({ testParam, resultParam, renderTestInfo }) => {
  return (
    <div>
      <h3>친구에게 결과 공유하기</h3>
      <div className={styles.shareButtonDiv}>
        <FacebookShareButton
          url={`${base_url}/${testParam}/result/${resultParam}`}
          hashtag={`#${renderTestInfo?.info?.mainTitle}`}
        >
          <FacebookIcon size={48} round className={styles.socialMediaIcon} />
        </FacebookShareButton>
        <TwitterShareButton
          url={`${base_url}/${testParam}/result/${resultParam}`}
          title={`${renderTestInfo?.info?.mainTitle}`}
          hashtags={[`#${renderTestInfo?.info?.mainTitle}`]}
        >
          <XIcon size={48} round className={styles.socialMediaIcon} />
        </TwitterShareButton>

        <CopyToClipboard
          text={`${base_url}/${testParam}/result/${resultParam}`}
        >
          <button
            onClick={() => {
              alert("URL이 복사되었습니다.");
            }}
            className={styles.urlShareButton}
          >
            URL
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default ShareButtonGroup;
