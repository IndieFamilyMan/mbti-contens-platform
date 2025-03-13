import React, { useState } from "react";
import { TESTS } from "../../data/TESTS";
import { Link } from "react-router-dom";

const ResultThumbnailList = ({ testParam }) => {
  const [testList, setTestList] = useState(TESTS);

  return (
    <div>
      {testList
        .filter((test) => test?.info?.mainUrl !== testParam)
        .map((item) => (
          <Link to={`/${item?.info?.mainUrl}`} key={item?.info?.mainUrl}>
            <img
              src={item?.info?.thumbImage}
              alt={item?.info?.mainTitle}
              style={{ width: "100%", height: "100%" }}
            />
          </Link>
        ))}
    </div>
  );
};

export default ResultThumbnailList;
