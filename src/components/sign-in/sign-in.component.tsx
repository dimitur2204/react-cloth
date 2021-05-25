import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

export type SignInCredentials = {
	[key: string]: string;
};
const SignIn = () => {
	const [credentials, setCredentials] = useState<SignInCredentials>({
		email: '',
		password: '',
	});

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const target = e.target as typeof e.target & {
			value: string;
			name: string;
		};
		const { value, name } = target;
		setCredentials({ [name]: value });
	};
	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span>Sign in with your email and password</span>

			<form action="" onSubmit={handleSubmit}>
				<FormInput
					type="email"
					label="Email"
					value={credentials.email}
					handleChange={handleChange}
					required
				></FormInput>
				<FormInput
					type="password"
					label="Password"
					value={credentials.password}
					handleChange={handleChange}
					required
				></FormInput>
				<div className="buttons">
					<CustomButton type="submit">Sign in</CustomButton>
					<CustomButton isGoogleSignIn onClick={signInWithGoogle}>
						Sign in with Google
					</CustomButton>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
