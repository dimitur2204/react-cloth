import { Component, PropsWithChildren } from 'react';
import {
	ErrorImageContainer,
	ErrorImageOverlay,
	ErrorImageText,
} from './error-boundary.styles';

export default class ErrorBoundary extends Component<
	PropsWithChildren<{}>,
	{ hasErrored: boolean }
> {
	constructor(props: PropsWithChildren<{}>) {
		super(props);
		this.state = {
			hasErrored: false,
		};
	}

	static getDerivedStateFromError(error: any) {
		return { hasErrored: true };
	}

	componentDidCatch(error: any, info: any) {
		console.log(error);
	}

	render() {
		if (this.state.hasErrored) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl="https://i.imgur.com/g3hgqe8.png" />
					<ErrorImageText>Sorry this page is broken.</ErrorImageText>
				</ErrorImageOverlay>
			);
		}
		return this.props.children;
	}
}
