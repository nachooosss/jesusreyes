import React from "react";
import PolygonObj from "../../StyledComponents/PolygonObj/PolygonObj";
import Polygon from "../../StyledComponents/Polygon/Polygon";
import Avatar from "../../StyledComponents/Avatar/Avatar";
import { css, styled } from "styled-components";
import "./Header.css";
const ContainerHeader = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  animation-name: "fadeInLeft";
  animation-duration: 500ms;
`;

const AddAnimation = css`
  animation: float 6s ease-in-out infinite;
  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`;
const Header = () => {
  return (
    <>
      <ContainerHeader>
        <Polygon
          className="subpolygon sp-1"
          $position="absolute"
          $opacity="0.6"
          $AnimationK={AddAnimation}
        ></Polygon>
        <Polygon
          className="subpolygon sp-2"
          $position="absolute"
          $opacity="0.6"
          $AnimationK={AddAnimation}
          $animation_delay="2s"
        ></Polygon>
        <PolygonObj></PolygonObj>
        <Avatar
          className="avatarHeader"
          $position="absolute !important"
        ></Avatar>
      </ContainerHeader>
    </>
  );
};

export default Header;