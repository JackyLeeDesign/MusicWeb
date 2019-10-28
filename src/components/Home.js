import React, { Fragment } from "react";
const TopInfo = React.lazy(() => import("./TopInfo"));
const KalimbaContent = React.lazy(() => import("./KalimbaContent"));
import KalimbaStore from "../store/KalimbaStore";
const Home = props => {
  const kalimbaStore = new KalimbaStore();
  return (
    <Fragment>
      <TopInfo />
      <KalimbaContent kalimbaStore={kalimbaStore} />
    </Fragment>
  );
};
export default Home;
