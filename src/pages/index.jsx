import React, { Fragment } from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'

import Rocket from 'react-icons/lib/go/rocket'
import Close from 'react-icons/lib/go/x'

import Wrapper from '../components/Wrapper'
import Title from '../components/Title'
import Text from '../components/Text'
import Subtitle from '../components/Subtitle'
import ContactForm from '../components/ContactForm'

import theme from '../utils/theme'

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.darkBg};
  transition: all .2s;
  min-height: 100vh;
`

const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
`

const FormOverlay = styled.div`
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: center;
  padding: 10vh;
  position: absolute;
  transform: scale(0);
  transition: all ease-in-out .4s;
  width: 90%;
  z-index: 2;
`

const FormButton = styled.label`
  background-color: transparent;
  border: 1px solid ${theme.colors.primary};
  color: ${theme.colors.primary};
  cursor: pointer;
  font-family: ${theme.fonts.subtitle};
  font-weight: normal;
  position: relative;
  padding: 15px 20px;
  touch-action: manipulation;
  text-align: center;
  transition: all 0.17s ease-in-out;
  user-select: none;
  white-space: nowrap;
  z-index: 1;

  &:hover {
    background: transparent;
    border: 1px solid ${theme.colors.primary};
    color: #fff;
  }

  svg {
    padding-right: 10px;
    font-size: 1.8em;
  }
`

const CloseWrapper = styled.label`
  align-self: flex-end;
  color: tomato;
  cursor: pointer;
  font-size: 48px;
`

const ParticlesWrapper = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const AboutMe = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  @media (min-width: 960px) {
    width: 60%;
  }
`

const IndexPage = () => (
  <Fragment>
    <Header>
      <input id="contact-form-trigger" type="checkbox" hidden />
      <FormOverlay id="form-overlay">
        <CloseWrapper htmlFor="contact-form-trigger"><Close /></CloseWrapper>
        <ContactForm/>
      </FormOverlay>
      <Wrapper className="header" alignItems="center">
        <HeaderContent>
          <Title align="center" color="#fff" transform="uppercase">Eliabe <em>Junior</em></Title>
          <Subtitle align="center" color="#fff" marginTop="10px" marginBottom="30px" weight="300">Hello! I'm Fullstack Designer from Recife, Brazil, who loves to turn ideas into reality with JavaScript.</Subtitle>
          <FormButton htmlFor="contact-form-trigger"><Rocket/>Let's talk!</FormButton>
        </HeaderContent>
        <ParticlesWrapper
          params={
            {
              "particles": {
                "number": {
                  "value": 80,
                  "density": {
                    "enable": true,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "edge",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 3
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 1.5,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 4,
                    "size_min": 0.3,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": false,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 1.6,
                  "direction": "top",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": false,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            }
          }
        />
      </Wrapper>
    </Header>
    <Wrapper>
      <AboutMe>
        <Title size="3.4em">about me</Title>
        <Text>
          I'm Bachelor in Information Management at the Federal University of Pernambuco and an enthusiast of Blockchain projects. My thesis was a analysis of bitcoin price in june/2017, you can find it <a href="https://eliabejr.gitbook.io/bitcoin/" target="_blank">here</a>.
          <br/>
          In the vacant hours I study economics and play Tibia (yes, really).
        </Text>
      </AboutMe>
    </Wrapper>
  </Fragment>
)

export default IndexPage

