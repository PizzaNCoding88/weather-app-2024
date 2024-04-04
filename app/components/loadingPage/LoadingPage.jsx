import React from "react";
import Loading from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <>
      <div class={Loading.container}>
        <div class={Loading.loader}></div>
      </div>
    </>
  );
};

export default LoadingPage;
