import { Component } from 'react'
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles'

export default class ErrorBoundary extends Component<unknown, { hasErrored: boolean }> {
  constructor(props: unknown) {
    super(props)
    this.state = {
      hasErrored: false,
    }
  }

  static getDerivedStateFromError() {
    return { hasErrored: true }
  }

  componentDidCatch(error: Error) {
    console.log(error)
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/g3hgqe8.png" />
          <ErrorImageText>Sorry this page is broken.</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children
  }
}
