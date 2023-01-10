import styled from 'styled-components'

export const ContactPageContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  align-items: center;
`
export const ContactPageHeader = styled.div`
  margin-top: 100px;
`
export const HeaderTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
`
export const HeaderText = styled.div`
  font-size: 1.5rem;
`

export const MainContentContainer = styled.div`
  background-color: #e9edf5;
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin: 50px 0 100px 0;
`
export const FormContainer = styled.div`
  padding: 50px;
`
export const FormHeader = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  color: #f0531a;
`
export const Form = styled.form`
  margin-top: 50px;
`
export const TopForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`
export const InputContainer = styled.div`
  margin-bottom: 25px;
`
export const Label = styled.label`
  display: block;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 10px;
`
export const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid gray;
  appearance: none;
  background: #e9edf5;
  padding: 12px;
  font-size: 1rem;
`
export const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  resize: none;
  margin-top: 20px;
  background-color: #e9edf5;
  font-size: 1rem;
`
export const FormButton = styled.button`
  background-color: #f0531a;
  color: white;
  border: none;
  padding: 10px 35px;
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
`

export const InfoContainer = styled.div`
  background-color: #f0531a;
  padding: 50px;
`
export const InfoHeaderWrap = styled.div`
  margin-bottom: 50px;
`
export const InfoBodyWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 30px;
`
export const Info = styled.p`
  font-size: 1rem;
  color: white;

  &.title {
    font-size: 1.5rem;
    font-weight: 600;
  }
  &.bolden {
    font-weight: 500;
  }
`
