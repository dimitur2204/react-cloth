import SignIn from '../../components/auth/sign-in/sign-in.component';
import SignUp from '../../components/auth/sign-up/sign-up.component';
import './sign-in-up.styles.scss';

const SignInUpPage = () => (
	<div className="sign-in-and-up">
		<SignIn></SignIn>
		<SignUp></SignUp>
	</div>
);

export default SignInUpPage;
