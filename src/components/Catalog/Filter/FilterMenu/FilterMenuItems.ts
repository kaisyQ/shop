import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9999;
`;

const MenuContent = styled.div`
  position: absolute;
  width: 100%;
  top: 60px;
  right: 0;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.3s ease-in-out forwards;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 10px 15px;
  cursor: pointer;
  transition: .3s ease-in-out all;
  color: #757474;

  :hover {
    color: #000;
    text-decoration: underline #000;
  }
`;


export default {
    ani: {
        fadeIn 
    },
    comp: {
        MenuWrapper, MenuContent, List, ListItem
    }
}