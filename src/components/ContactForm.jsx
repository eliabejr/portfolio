import React from 'react'
import styled from 'styled-components'

import FormField from './FormField'
import Textarea from './Textarea'
import Button from './Button'

const Form = styled.form`
  display: block;
  width: 100%;
`

const ContactForm = () => (
  <Form autocomplete="off" name="contact" data-netlify="true" method="POST">
    <FormField name="name" label="How can I call You?" placeholder="Tony Montana" type="text"/>
    <FormField name="email" label="Your best Email" placeholder="tony@montana.com" type="email"/>
    <Textarea name="message" label="Let's play someday? Tell me when!" placeholder="Friday, at 20pm. In tibia Relembra server."/>
    <Button raised={false}>Let's talk!</Button>
  </Form>
)

export default ContactForm