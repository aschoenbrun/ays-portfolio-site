import React, { useContext } from "react";
import styled from "styled-components/macro";
import { useMediaQuery } from "react-responsive";
import { PageContext } from "../Layouts/LayoutMain";
import { color } from "../GlobalStyles";
import cldnyUrlTrans from "../../scripts/cldnyUrlTrans";

const HpBannerStyles = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(90vh - ${(props) => props.hdrCompPdg});
  background-image: url(${(props) => props.imgUrl});
`;

const HpBannerDrk = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${color("blue", "dk")};
  mix-blend-mode: multiply;
`;

const HpBannerText = styled.h2`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  filter: drop-shadow(0 0.5px 1px rgba(0, 0, 0, 0.75));
`;

const HpBannerTextSpanBase = styled.span`
  display: block;
  color: ${color("tan", "xlt")};
  text-transform: uppercase;
  line-height: 1em;
  letter-spacing: 0.2em;
`;

const HpBannerTopText = styled(HpBannerTextSpanBase)`
  font-size: 150px;
  font-weight: 100;
  letter-spacing: 0.2em;
`;

const HpBannerBotText = styled(HpBannerTextSpanBase)`
  font-size: 60px;
  font-weight: 200;
`;

const HpBannerTextDiv = styled.div`
  height: 2px;
  width: 100%;
  background-color: ${color("tan", "xlt")};
`;

const HpBanner = () => {
  const pageContext = useContext(PageContext);
  const { hdrCompPdg, pageData } = pageContext;
  const { hpBanner } = pageData;
  const { bannerImgUrl, bannerTextTop, bannerTextBottom } = hpBanner;
  const min1200 = useMediaQuery({ minWidth: 1200 });
  const min1024 = useMediaQuery({ minWidth: 1024 });
  const min900 = useMediaQuery({ minWidth: 900 });
  const min768 = useMediaQuery({ minWidth: 768 });
  const min600 = useMediaQuery({ minWidth: 600 });
  const min480 = useMediaQuery({ minWidth: 480 });

  const imgSize = min1200
    ? [1920, 1080]
    : min1024
    ? [1210, 1080]
    : min900
    ? [1035, 1080]
    : min768
    ? [910, 1080]
    : min600
    ? [775, 1080]
    : min480
    ? [610, 1080]
    : [490, 800];

  const imgUrl = cldnyUrlTrans(
    bannerImgUrl.cloudinaryUrlField,
    `w_${imgSize[0]},h_${imgSize[1]},c_fill,f_auto,q_auto`
  );

  return (
    <HpBannerStyles
      imgOrigUrl={bannerImgUrl.cloudinaryUrlField}
      hdrCompPdg={hdrCompPdg}
      imgUrl={imgUrl}
    >
      <HpBannerText>
        <HpBannerTopText>{bannerTextTop}</HpBannerTopText>
        <HpBannerTextDiv />
        <HpBannerBotText>{bannerTextBottom}</HpBannerBotText>
      </HpBannerText>
      <HpBannerDrk />
    </HpBannerStyles>
  );
};

export default HpBanner;
