import styled from 'styled-components';

interface IInfoFooterBtnProps {
    isLeft: boolean
}

const Container = styled.div`
    padding: 1rem;
    min-height: 8rem;
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    position: relative;


    @media only screen and (max-width: 330px) {
        flex-direction: column;
        align-items: center;
    }

    ::after {
        content: '';
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        border-bottom: 1px solid #000;
    }

    :first-child::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 100%;
        width: 100%;
        border-top: 1px solid #000;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    
    @media only screen and (max-width: 600px) {
    }
`;

const ImageWrapper = styled.div`
    width: 100%;
    max-width: 20rem;
    min-width: 10rem;
`;


const Image = styled.img`
    display: block;
    margin: 0;
    padding: 0;
`;

const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const InfoHeader = styled.header`
    width: 100%;
    font-size: 1.8rem;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    gap: 1rem;

    @media only screen and (max-width: 625px) {
        font-size: 1.6rem;
        gap: .5rem;
    }
`;

const InfoMain = styled.main`
    text-align: left;
    text-overflow: ellipsis; 
    max-height: 5rem;
    line-height: 2.2rem;
    overflow: hidden;
`;

const Name = styled.div`
    font-weight: 500;

    @media only screen and (max-width: 625px) {
        display: flex;
        flex-direction: column;
    }
`;

const InfoFooter = styled.footer`
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    @media only screen and (max-width: 600px) {
        flex-direction: column;

        align-items: center;
    }

    @media only screen and (max-width: 200px) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const Price = styled.div`
    font-weight: 500;
    @media only screen and (max-width: 625px) {
        display: flex;
        flex-direction: column;
    }
`;

const ItemControll = styled.div`
    padding-left: 1rem;
    padding-top: .2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
`;

const Text = styled.p`
`;

const BtnNavLinkFlexWrapper = styled.div<IInfoFooterBtnProps>`
    @media only screen and (max-width: 600px) {
        align-self: ${props => props.isLeft ? 'flex-start': 'flex-end'};
    }
`;

const InfoFooterButton = styled.button`
    display: flex;
    align-items: center;
    gap: .5rem;
    font: inherit;

    :hover {
        text-decoration: underline;
    }
`;

export default {
    Container, Wrapper, ImageWrapper, Image, Info,  Name, Price, 
    ItemControll, InfoHeader, InfoMain, Text, InfoFooter, InfoFooterButton,
    BtnNavLinkFlexWrapper
};