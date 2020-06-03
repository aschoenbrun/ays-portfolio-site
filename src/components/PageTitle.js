import React, { useRef, useEffect } from "react";
import styled from "styled-components/macro";
import { color } from "./GlobalStyles";
import anime from "animejs";

export const PageTitleStyles = styled.h1`
  color: ${color("blue")};
  margin: 0;
  font-size: 40px;
  font-weight: 100;
  text-align: center;
  span {
    display: block;
  }
`;

const PageTitleDivStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 20px auto 55px;
  width: 150px;
  height: 35px;
  border-top: 1px solid ${color("tan", "lt")};
`;

const PTWaveItemStyles = styled.div`
  width: 10px;
  margin: 0 2px;
  background-color: white;
  border: 1px solid ${color("tan", "lt")};
  border-top-width: 0;
  opacity: 0.5;
`;

const animeStandard = {
  direction: "alternate",
  loop: true,
  autoplay: true,
  easing: "easeInOutSine",
};

const PTWaveItemOuter = () => {
  const animeRefOuter = useRef();
  useEffect(() => {
    anime({
      ...animeStandard,
      targets: animeRefOuter.current,
      duration: function () {
        return anime.random(750, 1500);
      },
      height: function () {
        return anime.random(7, 15);
      },
    });
  }, []);
  return <PTWaveItemStyles ref={animeRefOuter} />;
};

const PTWaveItemMid = () => {
  const animeRefMid = useRef();
  useEffect(() => {
    anime({
      ...animeStandard,
      targets: animeRefMid.current,
      duration: function () {
        return anime.random(750, 1500);
      },
      height: function () {
        return anime.random(17, 25);
      },
    });
  }, []);
  return <PTWaveItemStyles ref={animeRefMid} />;
};

const PTWaveItemInner = () => {
  const animeRefInner = useRef();
  useEffect(() => {
    anime({
      ...animeStandard,
      targets: animeRefInner.current,
      duration: function () {
        return anime.random(750, 1500);
      },
      height: function () {
        return anime.random(27, 35);
      },
    });
  }, []);
  return <PTWaveItemStyles ref={animeRefInner} />;
};

const PageTitle = ({ children }) => {
  return (
    <>
      <PageTitleStyles>{children}</PageTitleStyles>
      <PageTitleDivStyles>
        <PTWaveItemOuter />
        <PTWaveItemMid />
        <PTWaveItemInner />
        <PTWaveItemMid />
        <PTWaveItemOuter />
      </PageTitleDivStyles>
    </>
  );
};

export default PageTitle;
