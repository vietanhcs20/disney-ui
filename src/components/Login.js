import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src='images/cta-logo-one.svg' />
                    <SignUp>GET ALL THERE</SignUp>
                    <Description>
                        Get Premier Access to Raya and the Last Drag with a Disney+ subscription. As of 83/26/21, and The Disney Bundle will increase by $1.
                    </Description>
                    <CTALogoTwo src='images/cta-logo-two.png' />
                </CTA>
                <BgImage />
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`

const BgImage = styled.div`
    height: 100%;
    background-image: url("images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -10;
`


const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`

const CTA = styled.div`
    max-width: 650px;
    width: 100%;
    display: flex;
    flex-direction: column;
    
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;

`

const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 16.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background-color: #0483ee;
    }

    
`
const Description = styled.p`
    color: hsla(0,0%, 95.3%,1);
    font-size: 13px;
    margin: 0 0 24px;
    line-height: 1.5;
    letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
    margin-bottom: 20px;
    max-width: 600px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`

export default Login