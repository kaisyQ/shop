import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    text-align: left;
    font-size: 2rem;
    margin: 4rem 0;
`;

const Header = styled.header`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const HeaderTitle = styled.h1`
    margin-left: 2rem;
    font-weight: 500;
`;

const HeaderText = styled.p`
    margin-left: 4rem;
`;

const Main = styled.main`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Footer = styled.footer`
    width: 100%;
    text-align: center;
    font-weight: 600;
`;

const Section = styled.section`
`;


const SectionTitle = styled.h2`
    font-weight: 500;
`;


const SectionText = styled.p`
    text-indent: 4rem;
`;

const Bold600Span = styled.span`
    font-weight: 600;
`;

export default {
    Wrapper, Header, HeaderTitle, HeaderText, Section, SectionTitle, SectionText, Main, Footer, Bold600Span
};