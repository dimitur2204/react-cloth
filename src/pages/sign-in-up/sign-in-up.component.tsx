import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './sign-in-up.styles.scss';

const SignInUpPage = () => (
	<div className="sign-in-and-sign-up">
		<SignIn></SignIn>
		<SignUp></SignUp>
	</div>
);

export default SignInUpPage;
