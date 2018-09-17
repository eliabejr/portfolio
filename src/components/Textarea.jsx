import React from 'react'
import styled from 'styled-components'

const FieldWrapper = styled.div`
  margin: 10px;
  width: 100%;
`

const Input = styled.textarea`
  border: none;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.08);
  background: #fff;
  color: #252a34;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  display: block;
  padding: 15px;
  transition: all 0.2s;
  width: 100%;
  -webkit-appearance: none;
  &:invalid {
    color: #e74c3c;
  }
`

const Label = styled.label`
  color: #252a34;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  font-weight: 400;
`

const HelperText = styled.span`
  color: #252a34;
  font-family: -apple-system, system-ui, BlinkMacSystemFont, Arial, sans-serif;
  font-size: 0.7rem;
  padding-left: 3px;
`

const Textarea = ({ field, label, placeholder, helperText }) => (
  <FieldWrapper>
    <Label for={field}>{label}</Label>
    <Input name={field} placeholder={placeholder} />
    <HelperText>{helperText}</HelperText>
  </FieldWrapper>
)

export default Textarea