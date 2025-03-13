import React from 'react';
import IntroButtonGroup from './IntroButtonGroup';

function Intro({ info, setMode }) {
  return (
    <div>
      <h1>{info?.mainTitle}</h1>
      <h3>{info?.subTitle}</h3>
      <img
        onClick={() => setMode('quiz')}
        style={{ width: '100%', cursor: 'pointer' }}
        src={info?.mainImage}
        alt={info?.mainTitle}
      />
      <p>
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#000' }}>
          {info?.mainTitle}
        </span>
        로 여러분의 성향을 테스트 해보세요!
      </p>
      <IntroButtonGroup setMode={setMode} />
    </div>
  );
}

export default Intro;
