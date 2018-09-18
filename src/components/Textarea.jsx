import React from 'react'
import styled from 'styled-components'
import theme from '../utils/theme'

const FieldWrapper = styled.div`
  margin-top: ${props => props.marginTop || '30px'};
  margin-bottom: ${props => props.marginBottom || '30px'};
  margin-right: ${props => props.marginRight};
  margin-left: ${props => props.marginLeft};
  width: 100%;
  textarea:focus~label, textarea:not(:placeholder-shown)~label {
    font-size: 0.7em;
    transform: translateY(-20px);
  }
  textarea:focus~.form-bar,
  textarea:not(:placeholder-shown)~.form-bar {
    transform: scaleX(5);
  }
  textarea::placeholder {opacity:0}
  textarea:focus::placeholder {opacity:1}
`

const Input = styled.textarea`
  background: transparent;
  border: none;
  border-bottom: 1px solid #ccc;
  border-radius: 0;
  display: block;
  font-family: ${theme.fonts.subtitle};
  outline:none;
  min-height: 100px;
  padding: 5px 10px;
  position: relative;
  resize: none;
  transition: all .2s;
  width: 100%;
  z-index: 1;
  &:invalid {
    box-shadow: none;
  }
`

const Label = styled.label`
  color: ${theme.colors.primary};
  font-size: 1em;
  font-family: ${theme.fonts.subtitle};
  margin-top: -100px;
  position: absolute;
  transition: .2s;
  z-index: 0;
`

const HelperText = styled.span`
  color: ${theme.colors.darkBg};
  font-family: ${theme.fonts.subtitle};
  font-size: 0.7rem;
  padding-left: 3px;
`

const InputBar = styled.i`
  height: 2px;
  width: 20%;
  background: ${theme.colors.primary};
  display: block;
  margin: -1px auto 0;
  transform: scaleX(0);
  transition: all .45s;
  position: relative;
  z-index: 2;
`

const FormField = ({
  name,
  type,
  label,
  placeholder,
  required,
  helperText,
  marginBottom,
  marginLeft,
  marginRight,
  marginTop,
}) => (
  <FieldWrapper marginBottom={marginBottom} marginLeft={marginLeft} marginRight={marginRight} marginTop={marginTop}>
    <Input name={name} type={type} placeholder={placeholder} required={required} />
    {!label ? null : <Label for={name}>{label}</Label>}
    <InputBar className="form-bar" autocomplete="off"/>
    {!helperText ? null : <HelperText>{helperText}</HelperText>}
  </FieldWrapper>
)

export default FormField