import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { IntlProvider, addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import my from 'react-intl/locale-data/my';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'
import HomePage from './components/home/HomePage'
import LoginPage from './components/auth/LoginPage'
import RegisterPage from './components/auth/RegisterPage'
import VerificationPage from './components/auth/VerificationPage'
import NotFound from './components/notFound'
import Cart from './components/cart'


addLocaleData(ru);
addLocaleData(my);

const changeMessage = (lang) => {
  if(lang === 'RU'){
    return { 'locale': 'ru', 'banner.slogan': 'Yòng shíjì huìlǜ zhīfù hé huìkuǎn zuì kuài de fāngshì.' }
  }else if(lang === 'MY'){
    return { 'locale': 'my', 'banner.slogan': 'Bayar dan Hantar wang cara terpantas dengan kadar pertukaran sebenar.'}
  }
}

const Routes = ({ store }) => (
  <Provider store={store}>
    <IntlProvider locale={store.getState().locale.toLowerCase()} messages={changeMessage(store.getState().locale)}>
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/verify" component={VerificationPage} />
            <Route path="/cart" component={Cart} />
            <Route path="*" component={NotFound} />
          </Switch>
        </App>
      </Router>
    </IntlProvider>
  </Provider>
)

Routes.propTypes = {
  store: PropTypes.object.isRequired
}

export default Routes
