import React from "react";

const Index = React.lazy(() => import("../views"));

const IndexPage = () => {
  return <Index />;
};

export default IndexPage;
