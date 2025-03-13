import React, { useState, useEffect } from "react";
import style from "./quiz.module.css";
import { Progress } from "antd";
import { arrayShuffler } from "../../tools/tools";

function Quiz({ questions, mbtiScore, setMbtiScore, setMode }) {
  const [questionNum, setQuestionNum] = useState(0);

  const onOptionClick = (type) => {
    setMbtiScore((prevScore) => ({
      ...prevScore,
      [type]: prevScore[type] + 1,
    }));
    setQuestionNum((prev) => prev + 1);
  };

  useEffect(() => {
    if (questionNum === questions.length) {
      setMode("loading");
    }
  }, [questionNum, questions, setMode]);

  return (
    <div>
      <h3 className={style.questionText}>{questions[questionNum]?.question}</h3>
      {/*  */}
      {questions[questionNum]?.answers &&
        arrayShuffler(questions[questionNum]?.answers)?.map((option) => (
          <button
            className={style.optionButton}
            onClick={() => onOptionClick(option.type)}
            key={option.content}
          >
            {option.content}
          </button>
        ))}

      {/*  */}
      <Progress
        percent={(questionNum / questions.length) * 100}
        showInfo={false}
      />
      <h4>
        {questionNum}/{questions.length}
      </h4>
    </div>
  );
}

export default Quiz;
/*

question 도 arrayshuffler 함수를 거쳐서 랜덤 하게 지정 되려면 어떻게 해야해?

questions 배열을 컴포넌트가 처음 마운트될 때 한 번만 섞어주면 됩니다. useState와 useEffect를 사용하여 다음과 같이 구현할 수 있습니다:
import React, { useState, useEffect } from 'react';
import { arrayShuffler } from '../../tools/tools';

function Quiz({ questions: originalQuestions, mbtiScore, setMbtiScore, setMode }) {
  const [questionNum, setQuestionNum] = useState(0);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  // 컴포넌트 마운트 시 질문 섞기
  useEffect(() => {
    const shuffled = arrayShuffler([...originalQuestions]);
    setShuffledQuestions(shuffled);
  }, []); // 빈 의존성 배열로 최초 1회만 실행

  return (
    <div>
      <h3 className={style.questionText}>
        {shuffledQuestions[questionNum]?.question}
      </h3>
      
      {shuffledQuestions[questionNum]?.answers &&
        arrayShuffler(shuffledQuestions[questionNum]?.answers)?.map((option) => (
          <button
            className={style.optionButton}
            onClick={() => onOptionClick(option.type)}
            key={option.content}
          >
            {option.content}
          </button>
        ))}

      <Progress
        percent={(questionNum / shuffledQuestions.length) * 100}
        showInfo={false}
      />
    </div>
  );
}
주요 변경사항:
원본 questions를 originalQuestions로 이름 변경
섞인 질문들을 저장할 shuffledQuestions 상태 추가
useEffect를 사용해 컴포넌트 마운트 시 질문들을 섞어서 저장
렌더링 시 shuffledQuestions 사용
이렇게 하면:
테스트 시작할 때마다 질문 순서가 랜덤하게 섞임
각 질문의 답변 옵션도 랜덤하게 섞임
원본 데이터는 보존됨 ([...originalQuestions]로 복사본 생성) 
 */
