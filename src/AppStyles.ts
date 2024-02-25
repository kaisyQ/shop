import styled from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  color: black;
  min-width: 250px;
  min-height: 100svh;

  @media only screen and (max-width: 768px){
    max-width: 768px;
  }

  @media only screen and (max-width: 330px){
    max-width: 330px;
  }
`;

export const MainContainer = styled.main`
  padding: 0 10px;
  flex-grow: 1;
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;
