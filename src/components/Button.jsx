import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import theme from '../utils/theme'

const ButtonWrapper = styled.button`
  align-self: ${props => props.alignSelf || 'inherit'};
  background-color: ${props => (props.raised ? 'transparent' : props.theme)};
  border: 1px solid ${props => (props.raised ? props.theme : 'transparent')};
  color: ${props => (props.raised ? props.theme : '#fff')};
  cursor: pointer;
  font-family: ${theme.fonts.subtitle};
  font-weight: normal;
  outline: none;
  padding: 15px 20px;
  touch-action: manipulation;
  text-align: center;
  transition: all 0.17s ease-in-out;
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
  a {
    color: inherit;
    font-size: 18px;
    text-decoration: none;
  }
  &:hover {
    background: transparent;
    border: 2px solid ${props => (props.raised ? 'transparent' : 'currentColor')};
    color: ${props => (props.raised ? '#fff' : props.theme || '#14646d')};
  }
`

const Icon = styled.span`
  padding-right: 10px;
`

ButtonWrapper.defaultProps = {
  theme: theme.colors.primary,
}

const Button = ({ link, theme, raised, alignSelf, icon, children }) => (
  <ButtonWrapper alignSelf={alignSelf} theme={theme} raised={raised}>
    <Icon>
      {icon ? icon : null}
    </Icon>
    {link ? <Link to={link}>{children}</Link> : children}
  </ButtonWrapper>
)

export default Button