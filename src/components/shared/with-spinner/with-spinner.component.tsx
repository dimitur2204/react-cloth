import { ComponentType } from 'react';
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

export type WithSpinnerProps = {
	isLoading: boolean;
	props: any;
};
const withSpinner = (WrappedComponent: ComponentType<WithSpinnerProps>) => {
	const Spinner = ({ isLoading, ...props }: WithSpinnerProps) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...(props as any)} />
		);
	};
	return Spinner;
};

export default withSpinner;
