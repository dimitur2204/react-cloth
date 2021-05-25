import { ComponentProps, PropsWithChildren } from 'react';
import './custom-button.styles.scss';

export interface CustomButtonProps
	extends PropsWithChildren<ComponentProps<'button'>> {
	isGoogleSignIn?: boolean;
}
const CustomButton = ({
	children,
	isGoogleSignIn,
	...props
}: CustomButtonProps) => {
	return (
		<button
			className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-btn`}
			{...props}
		>
			{children}
		</button>
	);
};

export default CustomButton;
