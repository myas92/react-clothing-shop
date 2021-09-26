import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
// import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.utils';
import './header.styles.scss';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ? (
                    <div className="option" onClick={() => { auth.signOut() }}>SIGN OUT</div>
                )
                    :
                    (<Link className="option" to="/sign-in">SIGN IN</Link>)
            }
        </div>
    </div>
)

// state is : root reducer 
//root reducer is : compine if reducers -> one of them is  user: userReducer
//so user is user reducer -> userReducer is {...state,currentUser: action.payload}
const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})
export default connect(mapStateToProps)(Header);