import React from 'react'
import styled from 'styled-components'
import { componentDidMount } from 'react-lifecycle-hoc'
import 'particles.js'

import Rocket from 'react-icons/lib/go/rocket'

import Wrapper from '../components/Wrapper'
import Title from '../components/Title'
import Text from '../components/Text'
import Subtitle from '../components/Subtitle'
import Button from '../components/Button'

import theme from '../utils/theme'

const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${theme.colors.darkBg};
  transition: all .2s;
  min-height: 100vh;
  @media (min-width: 960px) {
    min-height: calc(100vh - 60px);
    margin: 30px;
  }
`

const Particles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  <div>
    <Header>
      <Wrapper alignItems="center">
        <Title align="center" color="#fff" transform="uppercase">Eliabe <em>Junior</em></Title>
        <Subtitle align="center" color="#fff" marginTop="10px" marginBottom="30px" weight="300">Hello! I'm Fullstack Designer from Recife, Brazil, who loves to turn ideas into reality with JavaScript.</Subtitle>
        <Button raised={true} icon={<Rocket/>}>Let's talk!</Button>
      <Particles id="particles"/>
      </Wrapper>
    </Header>
    <Wrapper>
      <AboutMe>
        <Title size="3.4em">about me</Title>
        <Text>
          I'm Bachelor in Information Management at the Federal University of Pernambuco and an enthusiast of Blockchain projects. My thesis was a analysis of bitcoin price in june/2017, you can find it <a href="https://github.com/eliabejr/bitcoin-price-analysis/" target="_blank">here</a>.
          <br/>
          In the vacant hours I study economics and play Tibia (yes, really).
        </Text>
      </AboutMe>
    </Wrapper>
  </div>
)

export default componentDidMount(
  () => {
    /* eslint-disable no-undef */
    particlesJS('particles', require('../utils/particles-config.json'));
    /* eslint-enable no-undef */
  }
)(IndexPage)

