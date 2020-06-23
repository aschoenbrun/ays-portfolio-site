import React from "react";
import PageTitle from "../components/PageTitle";
import LayoutMain from "../components/Layouts/LayoutMain";
import PageIntro from "../components/PageIntro";

const NotFound404 = ({ location }) => {
  const pageTitle = "404 - Deal with it!";
  const pageData = { pageTitle };
  return (
    <LayoutMain location={location} pageData={pageData}>
      <PageTitle>I DONE MESSED UP!</PageTitle>
      <PageIntro centerIntro={true}>
        Try to navigate to another page. If that doesn't work, please let me
        know.
      </PageIntro>
    </LayoutMain>
  );
};

export default NotFound404;
