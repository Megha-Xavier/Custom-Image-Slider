import React, { useState, useEffect } from "react";
import "./App.css";

// const len = imgs.length - 1;

function App() {
  
  const imgs = [
    { id: 0, value: "./images/flower1.jpg" },
    { id: 1, value: "./images/flower2.jfif" },
    { id: 2, value: "./images/flower4.jfif" },
    { id: 3, value: "./images/flower5.jfif" },
    { id: 4, value: "./images/flower6.jfif" },
    { id: 5, value: "./images/flower2.jfif" },
    // { id: 6, value: "./images/flower4.jfif" },
  ];

  const [wordData, setWordData] = useState(imgs[0]);
  const handleClick = (index) => {
    console.log(index);
    const wordSlider = imgs[index];
    setWordData(wordSlider);
  };

  const moveSlider = () => {
    let id = wordData?.id;
    console.log(id);
    let data =
      id == imgs?.length - 1 ? imgs : imgs.filter((d) => d?.id == id + 1);
    setWordData(data[0]);
  };

  const moveSliderLeft = () => {
    let id = wordData?.id;
    let data =
      id == 0 ? imgs[imgs?.length - 1] : imgs.filter((d) => d?.id == id - 1);
    setWordData(Array.isArray(data) ? data[0] : data);
  };

  return (
    <div className="main">
      {/* <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
        }
      /> */}

      <div className="flex_row">
        <button onClick={moveSliderLeft}>{"<"}</button>
        {imgs.map((data, i) => (
          <div className="thumbnail" key={i}>
            <img
              className={wordData.id == i ? "clicked" : ""}
              src={data.value}
              onClick={() => handleClick(i)}
              height="70"
              width="100"
            />
          </div>
        ))}
        <button onClick={moveSlider}>{">"}</button>
      </div>
      <img src={wordData.value} height="300" width="500" />
    </div>
  );
}

export default App;
