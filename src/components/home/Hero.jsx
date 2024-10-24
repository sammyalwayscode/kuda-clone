import { BiLogoPlayStore } from "react-icons/bi"
import { FaApple } from "react-icons/fa"
import styled from "styled-components"
import HeroImage from '../../assets/hero.png'

const Hero = () => {
    return(
        <Container>
            <Wrapper>
                <TextBox>
                   <h1>The money app for Africans.</h1>
                   <p>Make free transfers, enjoy cashless payment options and earn interest on your savings with Kuda.</p>
                   <Buttons>
                    <button> <FaApple /> <span>App store</span></button>
                    <button> <BiLogoPlayStore /> <span>Play store</span></button>
                   </Buttons>
                </TextBox>
                <ImageBox>
                    <img src={HeroImage} alt="Hero" />
                </ImageBox>

            </Wrapper>
           
        </Container>
    )
}

export default Hero


const Container = styled.div`
/* background-color: yellow; */
max-width: 1280px;
margin-left: auto;
margin-right: auto;
padding: 0px 10px;
min-height: calc(100vh - 70px);
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div`
width: 85%;
/* background-color: pink; */
display: flex;
flex-wrap: wrap;
justify-content: space-between;
/* @media (max-width: 800px) {
    width: 90%;
} */
`
const TextBox = styled.div`
max-width: 400px;
/* background-color: aqua; */
display: flex;
flex-direction: column;
justify-content: center;
@media (max-width: 800px) {
    max-width: 100%;
   align-items: center;
   text-align: center;
}
h1{
    color: #40196D;
    font-size: 36px;
    font-weight: 800;
    line-height: normal;
}
`
const ImageBox = styled.div`
img{
    @media (max-width: 800px) {
    width: 100%;
}
}
`

const Buttons = styled.div``