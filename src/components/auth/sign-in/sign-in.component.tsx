import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../../firebase/firebase.utils';
import { googleSignInStart } from '../../../redux/user/user.actions';
import CustomButton from '../../shared/base/custom-button/custom-button.component';
import FormInput from '../../shared/form/form-input/form-input.component';
import './sign-in.styles.scss';

export type SignInCredentials = {
	[key: string]: string;
};
const SignIn = () => {
	const dispatch = useDispatch();
	const [credentials, setCredentials] = useState<SignInCredentials>({
		email: '',
		password: '',
	});

	const handleSubmit = async (e: SyntheticEvent) => {
		e.preventDefault();
		const { email, password } = credentials;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			setCredentials({ email: '', password: '' });
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target as typeof e.target & {
			value: string;
			name: string;
		};
		const { value, name } = target;
		setCredentials({ ...credentials, [name]: value });
	};
	const handleGoogleSignInClicked = () => {
		dispatch(googleSignInStart());
	};
	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form action="" onSubmit={handleSubmit}>
				<FormInput
					type="email"
					label="Email"
					name="email"
					value={credentials.email}
					handleChange={handleChange}
					required
				></FormInput>
				<FormInput
					type="password"
					label="Password"
					name="password"
					value={credentials.password}
					handleChange={handleChange}
					required
				></FormInput>
				<div className="buttons">
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton
						type="button"
						isGoogleSignIn
						onClick={handleGoogleSignInClicked}
					>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
