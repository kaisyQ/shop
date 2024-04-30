import styled from 'styled-components';

interface IInfoFooterBtnProps {
    isLeft: boolean
}

const Container = styled.div`
    padding: 10px;
    min-height: 80px;
    display: flex;
    align-items: flex-start;
    gap: 20px;
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
    max-width: 200px;
    min-width: 100px;
`;

const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const InfoHeader = styled.header`
    width: 100%;
    font-size: 18px;
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    gap: 10px;

    @media only screen and (max-width: 625px) {
        font-size: 16px;
        gap: 5px;
    }
`;

const InfoMain = styled.main`
    text-align: left;
    text-overflow: ellipsis; 
    max-height: 50px;
    line-height: 22px;
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
    gap: 10px;

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
    padding-left: 10px;
    padding-top: 2px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
`;

const Text = styled.p`
`;

const BtnNavLinkFlexWrapper = styled.div<IInfoFooterBtnProps>`
    @media only screen and (max-width: 600px) {
        align-self: ${props => props.isLeft ? 'flex-start': 'flex-end'};
    }
`;

const styles = {
    Container, Wrapper, ImageWrapper, Image, Info,  Name, Price, 
    ItemControll, InfoHeader, InfoMain, Text, InfoFooter,
    BtnNavLinkFlexWrapper
};

export default styles;