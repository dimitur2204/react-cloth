import { useEffect, lazy, Suspense, PropsWithChildren } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/shared/header/header.component'
import { selectCurrentUser } from './redux/user/user.selectors'
import { checkUserSession } from './redux/user/user.actions'
import GlobalStyle from './global.styles'
import Spinner from './components/shared/spinner/spinner.component'
import ErrorBoundary from './components/error-boundary/error-boundary.component'

export type User = {
  id: string
  displayName?: string
  email?: string
  createdAt?: Date
}

const HomePage = lazy(() => import('./pages/homepage.component'))
const ShopPage = lazy(() => import('./pages/shop/shop.component'))
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'))
const SignInUpPage = lazy(() => import('./pages/sign-in-up/sign-in-up.component'))

export const SuspenseWithFallBack = ({ children }: PropsWithChildren<any>) => (
  <Suspense fallback={<Spinner />}>{children}</Suspense>
)

function App() {
  const dispatch = useDispatch()

  const user = useSelector(selectCurrentUser)

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  return (
    <div className="container">
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <SuspenseWithFallBack>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              path="/signin"
              render={() => (user ? <Redirect to={'/'} /> : <SignInUpPage />)}
            />
          </SuspenseWithFallBack>
        </ErrorBoundary>
      </Switch>
    </div>
  )
}

export default App
