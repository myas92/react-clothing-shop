import React from 'react';
import CustomButtom from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import { SignInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }


    render() {
        return (
            <div className="sign-up">
                <h1>I already have an account</h1>
                <span>Sign in with your email</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="Email" required />
                    <FormInput name="password" type="password" value={this.state.password} handleChange={this.handleChange} label="Password" required />
                    <div className="buttons">
                        <CustomButtom type="submit">Sign In </CustomButtom>
                        <CustomButtom onClick={SignInWithGoogle} isGoogleSignIn={true}>Sign in with Google </CustomButtom>
                    </div>
 
                </form>
            </div>
        )
    }
}

export default SignIn;