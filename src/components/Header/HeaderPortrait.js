import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import cldnyUrlTrans from "../../scripts/cldnyUrlTrans";
import styled from "styled-components/macro";
import { color } from "../GlobalStyles";

const headerImgDims = "115px";
const fxdHeaderImgDims = "50px";

const HeaderPortraitStyle = styled.div`
  height: ${headerImgDims};
  width: ${headerImgDims};
  margin-bottom: -7px;
  margin-right: 15px;
  box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.75);
  background-color: ${color("tan")};
  background-size: contain;
  background-repeat: no-repeat;
  background-blend-mode: luminosity;
  background-image: url("${(props) => props.portrait}");
  @media screen and (min-width: 760px) {
    margin-right: 20px;
    .scrolled & {
      height: ${fxdHeaderImgDims};
      width: ${fxdHeaderImgDims};
      margin-bottom: -5px;
      margin-right: 15px;
      box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.75);
    }
  }
`;

const HeaderPortrait = () => {
  const query = graphql`
    query {
      sanityMyInfo {
        portrait {
          cloudinaryUrlField
        }
      }
    }
  `;

  const staticQuery = useStaticQuery(query);

  // prettier-ignore
  const portraitUrl = staticQuery.sanityMyInfo.portrait.cloudinaryUrlField;

  const portrait = cldnyUrlTrans(portraitUrl, "w_300,h_300,c_fill,f_auto");

  return <HeaderPortraitStyle portrait={portrait} />;
};

export default HeaderPortrait;
