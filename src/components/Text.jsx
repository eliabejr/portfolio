import styled from 'styled-components'
import theme from '../utils/theme'

export default styled.span`
  color: ${props => props.color || '#000'};
  font-family: ${theme.fonts.text};
  font-style: normal;
  font-weight: ${props => props.weight || '300'};
  line-height: 180%;
  margin-top: ${props => props.marginTop || props.margin || 0};
  margin-bottom: ${props => props.marginBottom || props.margin || 0};
  margin-right: ${props => props.marginRight || props.margin || 0};
  margin-left: ${props => props.marginLeft || props.margin || 0};
  font-size: ${props => props.size || '1.3em'};
  text-align: ${props => props.align};

  a {
    color: ${theme.colors.primary};
  }
`