import styled from 'styled-components'
import theme from '../utils/theme'

export default styled.h1`
  color: ${props => props.color || theme.colors.darkBg};
  font-family: ${theme.fonts.title};
  font-style: normal;
  font-weight: ${props => props.weight || '700'};
  line-height: normal;
  margin-top: ${props => props.marginTop || props.margin || 0};
  margin-bottom: ${props => props.marginBottom || props.margin || '10px'};
  margin-right: ${props => props.marginRight || props.margin || 0};
  margin-left: ${props => props.marginLeft || props.margin || 0};
  font-size: ${props => props.size || '3em'};
  text-align: ${props => props.align || 'inherit'};
  text-transform: ${props => props.transform || 'inherit'};

  em {
    color: ${theme.colors.primary};
    font-style: normal;
    font-weight: 300;
  }
`