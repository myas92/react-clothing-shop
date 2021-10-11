import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/header/header.component';
import Auth from './pages/auth/auth.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
// import { auth } from './firebase/firebase.utils';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/checkout.component';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     currentUser: null
  //   }

  // }
  unsubscribeFormAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          // await this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // })
        })

      }
      setCurrentUser(userAuth)
    })
  }

  componentWillUnmount() {

    this.unsubscribeFormAuth()
  }
  render() {
    return (
      <div className="App">

        {/* وقتی از ریداکس استفاده میشه دیگخ نیاز نیست استیت هارو به عنوان پراپس پاس بدیم بره پایین با کاکنک میشه به اون استید دسترسی داشت 
        <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/sign-in" render={
            () => this.props.currentUser ? (<Redirect to="/" />)
              : (<Auth />)
          } />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
