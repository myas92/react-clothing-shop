import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
// import { auth } from './firebase/firebase.utils';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: ''
    }

  }
  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = onAuthStateChanged(getAuth(), (user) => {
      this.setState({ currentUser: user })
      console.log(user);
    })
  }

  componentWillUnmount() {

    this.unsubscribeFormAuth()
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/sign-in" component={Auth} />
        </Switch>
      </div>
    );
  }

}

export default App;
