import React, { useState } from 'react'
import {
  ContactPageContainer,
  ContactPageHeader,
  Form,
  FormButton,
  FormContainer,
  FormHeader,
  HeaderText,
  HeaderTitle,
  Info,
  InfoBodyWrap,
  InfoContainer,
  InfoHeaderWrap,
  Input,
  InputContainer,
  Label,
  MainContentContainer,
  Textarea,
  TopForm,
} from './ContactPage.styles'

const defaultValues = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
}

function ContactPage() {
  const [data, setData] = useState(defaultValues)
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    setData(defaultValues)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setData({ ...data, [name]: value })
  }

  return (
    <ContactPageContainer>
      <ContactPageHeader>
        <HeaderTitle>Connect With Us</HeaderTitle>
        <HeaderText>
          We would love to respond to your queries and help you. <br /> Feel
          free to get in touch with us
        </HeaderText>
      </ContactPageHeader>
      <MainContentContainer>
        <FormContainer>
          <FormHeader>Send your request</FormHeader>
          <Form onSubmit={handleSubmit}>
            <TopForm>
              <InputContainer>
                <Label htmlFor='name'>Name</Label>
                <Input
                  type='text'
                  required
                  id='name'
                  name='name'
                  value={data.name}
                  onChange={handleChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Label htmlFor='phone'>Phone</Label>
                <Input
                  type='tel'
                  required
                  id='phone'
                  name='phone'
                  value={data.phone}
                  onChange={handleChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Label htmlFor='email'>Email</Label>
                <Input
                  type='email'
                  required
                  id='email'
                  name='email'
                  value={data.email}
                  onChange={handleChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Label htmlFor='subject'>Subject</Label>
                <Input
                  type='text'
                  id='subject'
                  name='subject'
                  value={data.subject}
                  onChange={handleChange}
                ></Input>
              </InputContainer>
            </TopForm>
            <InputContainer>
              <Label htmlFor='message'>Message</Label>
              <Textarea
                id='message'
                name='message'
                value={data.message}
                onChange={handleChange}
              ></Textarea>
            </InputContainer>
            <FormButton type='submit'>Send</FormButton>
          </Form>
        </FormContainer>
        <InfoContainer>
          <InfoHeaderWrap>
            <Info className='title'>Reach Us</Info>
          </InfoHeaderWrap>
          <InfoBodyWrap>
            <Info className='bolden'>Email</Info>
            <Info>algadai.kanatbek@gmail.com</Info>
            <Info className='bolden'>Phone</Info>
            <Info>+7 (747) 119 93 60</Info>
            <Info className='bolden'>Address</Info>
            <Info>
              Facebook Headquarters 1 Hacker Way Menlo Park,
              <br /> CA 94025
            </Info>
          </InfoBodyWrap>
        </InfoContainer>
      </MainContentContainer>
    </ContactPageContainer>
  )
}

export default ContactPage
