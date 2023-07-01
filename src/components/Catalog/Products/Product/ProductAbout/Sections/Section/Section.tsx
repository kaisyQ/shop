import React from "react";

import { 
    Wrapper, Section, Title, Block, Span, 
    Arrow, ParamsList, ParamsListItem, ParamName, Text, InfoWrapper
} from "./SectionStyles";

interface ICardAboutSectionProps {
    text?: string, 
    title: string,
    params?: {
        Width: string, 
        Height: string,
        Depth: string
    },
}


const CardAboutSection: React.FC<React.PropsWithChildren<ICardAboutSectionProps>> = (props) => {
    const [visibleText, setVisibleText] = React.useState(false);
    
    React.useEffect(() => {
        if(window.outerWidth >= 768) {
            setVisibleText(true);
        }
        return () => {
            setVisibleText(true);
        }
    }, [setVisibleText]) 

    
    const onTitleClick = (ev: React.MouseEvent<HTMLHeadingElement>) => {
        setVisibleText(prev => !prev);
    } 

    const { text, title, params, children } = props;

    return (
        <>
            <Wrapper>
                <Section>
                    <Title onClick={onTitleClick}>
                        { children }
                        <Span>{ title }</Span>
                        <Arrow visible={visibleText} />
                    </Title>

                    { 
                        params ? <InfoWrapper>
                            <ParamsList visible={visibleText}>
                            { Object.keys(params).map((param) => 
                                <ParamsListItem key={param}>
                                    <ParamName>
                                        { param }
                                    </ParamName>
                                    <span>{ params[param as keyof typeof params] }</span>
                                </ParamsListItem>)}
                            </ParamsList> 
                        </InfoWrapper> : <InfoWrapper>
                            <Text visible={visibleText}>{ text }</Text> 
                        </InfoWrapper>
                    }
                </Section>                
            </Wrapper>
        </>
    );
}

export default CardAboutSection;