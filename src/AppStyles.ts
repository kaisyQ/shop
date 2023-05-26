import styled from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  color: black;
  min-width: 250px;
  max-width: 1200px;
  min-height: 100vh;

  @media only screen and (max-width: 768px){
    max-width: 768px;
  }

  @media only screen and (max-width: 330px){
    max-width: 330px;
  }
`

export const MainContainer = styled.main`
  z-index: 3;
  padding: 0 1rem;
  flex-grow: 1;
  position: relative;
`;
