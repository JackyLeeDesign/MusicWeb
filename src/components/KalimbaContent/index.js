import React from "react";
import style from "./index.css";
const KalimbaContent = props => {
  const { kalimbaStore } = props;

  return (
    <div className={style.kalimbaContainer}>
      <div className={style.kalimbaBlack}></div>
      <div
        id="D6"
        className={`${style.kalimbaBtn} ${style.kalimbaD6}`}
        onTouchStart={() => kalimbaStore.mouseDown("D6")}
        onTouchEnd={() => kalimbaStore.mouseUp("D6")}
      >
        <p>。</p>
        <p>。</p>2
      </div>
      <div
        id="B5"
        className={`${style.kalimbaBtn} ${style.kalimbaB5}`}
        onTouchStart={() => kalimbaStore.mouseDown("B5")}
        onTouchEnd={() => kalimbaStore.mouseUp("B5")}
      >
        <p>　</p>
        <p>。</p>7
      </div>
      <div
        id="G5"
        className={`${style.kalimbaBtn} ${style.kalimbaG5}`}
        onTouchStart={() => kalimbaStore.mouseDown("G5")}
        onTouchEnd={() => kalimbaStore.mouseUp("G5")}
      >
        <p>　</p>
        <p>。</p>5
      </div>
      <div
        id="E5"
        className={`${style.kalimbaBtn} ${style.kalimbaE5}`}
        onTouchStart={() => kalimbaStore.mouseDown("E5")}
        onTouchEnd={() => kalimbaStore.mouseUp("E5")}
      >
        <p>　</p>
        <p>。</p>3
      </div>
      <div
        id="C5"
        className={`${style.kalimbaBtn} ${style.kalimbaC5}`}
        onTouchStart={() => kalimbaStore.mouseDown("C5")}
        onTouchEnd={() => kalimbaStore.mouseUp("C5")}
      >
        <p>　</p>
        <p>。</p>1
      </div>
      <div
        id="A4"
        className={`${style.kalimbaBtn} ${style.kalimbaA4}`}
        onTouchStart={() => kalimbaStore.mouseDown("A4")}
        onTouchEnd={() => kalimbaStore.mouseUp("A4")}
      >
        <p>　</p>
        <p>　</p>6
      </div>
      <div
        id="F4"
        className={`${style.kalimbaBtn} ${style.kalimbaF4}`}
        onTouchStart={() => kalimbaStore.mouseDown("F4")}
        onTouchEnd={() => kalimbaStore.mouseUp("F4")}
      >
        <p>　</p>
        <p>　</p>4
      </div>
      <div
        id="D4"
        className={`${style.kalimbaBtn} ${style.kalimbaD4}`}
        onTouchStart={() => kalimbaStore.mouseDown("D4")}
        onTouchEnd={() => kalimbaStore.mouseUp("D4")}
      >
        <p>　</p>
        <p>　</p>2
      </div>
      <div
        id="C4"
        className={`${style.kalimbaBtn} ${style.kalimbaC4}`}
        onTouchStart={() => kalimbaStore.mouseDown("C4")}
        onTouchEnd={() => kalimbaStore.mouseUp("C4")}
      >
        <p>　</p>
        <p>　</p>1
      </div>
      <div
        id="E4"
        className={`${style.kalimbaBtn} ${style.kalimbaE4}`}
        onTouchStart={() => kalimbaStore.mouseDown("E4")}
        onTouchEnd={() => kalimbaStore.mouseUp("E4")}
      >
        <p>　</p>
        <p>　</p>3
      </div>
      <div
        id="G4"
        className={`${style.kalimbaBtn} ${style.kalimbaG4}`}
        onTouchStart={() => kalimbaStore.mouseDown("G4")}
        onTouchEnd={() => kalimbaStore.mouseUp("G4")}
      >
        <p>　</p>
        <p>　</p>5
      </div>
      <div
        id="B4"
        className={`${style.kalimbaBtn} ${style.kalimbaB4}`}
        onTouchStart={() => kalimbaStore.mouseDown("B4")}
        onTouchEnd={() => kalimbaStore.mouseUp("B4")}
      >
        <p>　</p>
        <p>　</p>7
      </div>
      <div
        id="D5"
        className={`${style.kalimbaBtn} ${style.kalimbaD5}`}
        onTouchStart={() => kalimbaStore.mouseDown("D5")}
        onTouchEnd={() => kalimbaStore.mouseUp("D5")}
      >
        <p>　</p>
        <p>。</p>2
      </div>
      <div
        id="F5"
        className={`${style.kalimbaBtn} ${style.kalimbaF5}`}
        onTouchStart={() => kalimbaStore.mouseDown("F5")}
        onTouchEnd={() => kalimbaStore.mouseUp("F5")}
      >
        <p>　</p>
        <p>。</p>4
      </div>
      <div
        id="A5"
        className={`${style.kalimbaBtn} ${style.kalimbaA5}`}
        onTouchStart={() => kalimbaStore.mouseDown("A5")}
        onTouchEnd={() => kalimbaStore.mouseUp("A5")}
      >
        <p>　</p>
        <p>。</p>6
      </div>
      <div
        id="C6"
        className={`${style.kalimbaBtn} ${style.kalimbaC6}`}
        onTouchStart={() => kalimbaStore.mouseDown("C6")}
        onTouchEnd={() => kalimbaStore.mouseUp("C6")}
      >
        <p>。</p>
        <p>。</p>1
      </div>
      <div
        id="E6"
        className={`${style.kalimbaBtn} ${style.kalimbaE6}`}
        onTouchStart={() => kalimbaStore.mouseDown("E6")}
        onTouchEnd={() => kalimbaStore.mouseUp("E6")}
      >
        <p>。</p>
        <p>。</p>3
      </div>
    </div>
  );
};
export default KalimbaContent;
