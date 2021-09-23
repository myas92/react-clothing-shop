import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
// import { auth } from './firebase/firebase.utils';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }

  }
  unsubscribeFormAuth = null;

  componentDidMount() {
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(async snapShot => {
          await this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })

      }
      await this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {

    this.unsubscribeFormAuth()
  }
  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
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
