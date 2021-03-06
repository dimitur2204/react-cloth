import styled from 'styled-components'

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 968px) {
    width: 90%;
  }
`

export const SignInTitle = styled.h2`
  margin: 10px 0;
`

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 968px) {
    flex-direction: column;
    button {
      margin-bottom: 20px;
    }
  }
`
