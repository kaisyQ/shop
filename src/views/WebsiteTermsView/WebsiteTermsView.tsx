import React from 'react';

import WebsiteTermsStyles from './WebsiteTermsStyles';

import { animateScroll } from 'react-scroll';

const WebsiteTermsView = () => {

    React.useEffect(() => {
        animateScroll.scrollToTop();
    }, []);

    return (
        <>  
            <WebsiteTermsStyles.Wrapper>

                <WebsiteTermsStyles.Header>

                    <WebsiteTermsStyles.HeaderTitle>Terms and Conditions</WebsiteTermsStyles.HeaderTitle>

                    <WebsiteTermsStyles.HeaderText>
                        Last Updated: September 2023
                    </WebsiteTermsStyles.HeaderText> 

                    <WebsiteTermsStyles.HeaderText>Welcome to our website. By accessing or using our website, you agree to be bound by the following terms and conditions:</WebsiteTermsStyles.HeaderText>



                </WebsiteTermsStyles.Header>

                <WebsiteTermsStyles.Main>
                    <WebsiteTermsStyles.Section>

                        <WebsiteTermsStyles.SectionTitle>
                            <WebsiteTermsStyles.Bold600Span>1. </WebsiteTermsStyles.Bold600Span>
                                Use of the Website
                        </WebsiteTermsStyles.SectionTitle>


                        <WebsiteTermsStyles.SectionText>
                            The content of this website is for your general information and use only. It is subject to change without notice. We do not provide any warranty or guarantee as to the accuracy, completeness, suitability, or availability of the information and materials found on this website for any particular purpose.
                        </WebsiteTermsStyles.SectionText>

                    </WebsiteTermsStyles.Section>


                    <WebsiteTermsStyles.Section>

                        <WebsiteTermsStyles.SectionTitle>
                            <WebsiteTermsStyles.Bold600Span>2. </WebsiteTermsStyles.Bold600Span> 
                            Intellectual Property
                        </WebsiteTermsStyles.SectionTitle>


                        <WebsiteTermsStyles.SectionText>
                            All content on this website, including but not limited to text, graphics, logos, images, audio clips, and software, is the property of the website owner or its licensors and is protected by copyright laws. You may not copy, reproduce, distribute, transmit, display, perform, publish, license, modify, create derivative works from, transfer, or sell any content obtained from this website without our prior written consent.
                        </WebsiteTermsStyles.SectionText>

                    </WebsiteTermsStyles.Section>


                    <WebsiteTermsStyles.Section>

                        <WebsiteTermsStyles.SectionTitle>
                            <WebsiteTermsStyles.Bold600Span>3. </WebsiteTermsStyles.Bold600Span> 
                            User Conduct
                        </WebsiteTermsStyles.SectionTitle>


                        <WebsiteTermsStyles.SectionText>
                            You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use and enjoyment of this website by any third party. You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website.
                        </WebsiteTermsStyles.SectionText>

                    </WebsiteTermsStyles.Section>


                    <WebsiteTermsStyles.Section>

                        <WebsiteTermsStyles.SectionTitle>
                            <WebsiteTermsStyles.Bold600Span>5. </WebsiteTermsStyles.Bold600Span> 
                            Limitation of Liability
                        </WebsiteTermsStyles.SectionTitle>


                        <WebsiteTermsStyles.SectionText>
                            We will not be liable for any loss or damage arising from your use of this website or any information contained on it. This includes but is not limited to direct, indirect, incidental, punitive, and consequential damages.
                        </WebsiteTermsStyles.SectionText>

                    </WebsiteTermsStyles.Section>

                    <WebsiteTermsStyles.Section>

                        <WebsiteTermsStyles.SectionTitle>
                            <WebsiteTermsStyles.Bold600Span>6. </WebsiteTermsStyles.Bold600Span>
                            Governing Law
                        </WebsiteTermsStyles.SectionTitle>


                        <WebsiteTermsStyles.SectionText>
                            These terms and conditions shall be governed by and construed in accordance with the laws of Canada. Any dispute arising under these terms and conditions shall be subject to the exclusive jurisdiction of the courts of Canada.
                        </WebsiteTermsStyles.SectionText>

                    </WebsiteTermsStyles.Section>

                </WebsiteTermsStyles.Main>

                <WebsiteTermsStyles.Footer>
                    By using our website, you agree to these terms and conditions. If you do not agree to these terms and conditions, please do not use our website.
                </WebsiteTermsStyles.Footer>

            </WebsiteTermsStyles.Wrapper>

        </>
    );
}

export default WebsiteTermsView;