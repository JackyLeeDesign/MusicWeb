import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "!style-loader!css-loader!../css/reset.css";
import "!style-loader!css-loader!../css/allstyle.css";
import IndexLayout from "./components/Home";
import LoadingHome from "./components/LoadingHome";
import { Provider } from "mobx-react";
import KalimbaStore from "./store/KalimbaStore";
const kalimbaStore = new KalimbaStore();
// localStorage.setItem("colorSelect", 1);
// let storageValue = localStorage.getItem("colorSelect", 1);
// alert(storageValue);
// 總高度

window.addEventListener("scroll", () => {
  changePageStore.changeScrollyValue(
    (document.scrollingElement.scrollTop /
      (document.body.offsetHeight - window.innerHeight)) *
      100
  );
});
ReactDOM.render(
  <Suspense fallback={<LoadingHome />}>
    <Provider kalimbaStore={kalimbaStore}>
      <IndexLayout />
    </Provider>
  </Suspense>,
  document.getElementById("IndexLayout")
);
