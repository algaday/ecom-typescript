import React from 'react'
import {
  FieldWrap,
  Form,
  FormWrapper,
  Input,
  Label,
  LoginRef,
  LoginRefText,
  SignInContainer,
  SignInWrapper,
  SubmitButton,
  TopRow,
} from './SignInPage.styles'
import {
  createUserDocumentFromAuth,
  createAuthUserEmailAndPassword,
} from '../../firebase/firebase'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseError } from 'firebase/app'

const defaultFormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

function SignInPage() {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { firstName, lastName, email, password } = formFields
  const navigate = useNavigate()
  const handleSubmit = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault()
    try {
      const data = await createAuthUserEmailAndPassword(email, password)
      data && (await createUserDocumentFromAuth(data.user))

      setFormFields(defaultFormFields)
      navigate('/')
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case 'auth/email-already-in-use':
            alert('User already exists...')
            break

          default:
            console.log(error)
        }
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <SignInWrapper>
      <SignInContainer>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <TopRow>
              <FieldWrap>
                <Label>First Name*</Label>
                <Input
                  type='text'
                  required
                  autocomplete='off'
                  name='firstName'
                  value={firstName}
                  onChange={handleChange}
                />
              </FieldWrap>

              <FieldWrap>
                <Label>Last Name*</Label>
                <Input
                  type='text'
                  required
                  autocomplete='off'
                  name='lastName'
                  value={lastName}
                  onChange={handleChange}
                />
              </FieldWrap>
            </TopRow>

            <FieldWrap>
              <Label>Email Address*</Label>
              <Input
                type='email'
                required
                autocomplete='off'
                name='email'
                value={email}
                onChange={handleChange}
              />
            </FieldWrap>

            <FieldWrap>
              <Label>Set A Password*   </Label>
              <Input
                type='password'
                required
                autocomplete='off'
                name='password'
                value={password}
                onChange={handleChange}
              />
            </FieldWrap>

            <SubmitButton type='submit'>Register</SubmitButton>
            <LoginRefText>
              Already have an account. Login{' '}
              <LoginRef to='/login'>here</LoginRef>
            </LoginRefText>
          </Form>
        </FormWrapper>
      </SignInContainer>
    </SignInWrapper>
  )
}

export default SignInPage
