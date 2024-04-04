import React from "react";
import Loading from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <>
      <div className={Loading.container}>
        <div className={Loading.loader}></div>
      </div>
    </>
  );
};

export default LoadingPage;
