import SignIn from '../../components/auth/sign-in/sign-in.component'
import SignUp from '../../components/auth/sign-up/sign-up.component'
import { SignInAndUpContainer } from './sign-in-up.styles'

const SignInUpPage = () => (
  <SignInAndUpContainer>
    <SignIn></SignIn>
    <SignUp></SignUp>
  </SignInAndUpContainer>
)

export default SignInUpPage
