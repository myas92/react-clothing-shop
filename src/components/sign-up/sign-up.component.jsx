import React from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButtom from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';



import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("password don't match")
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })

        } catch (error) {
            console.error(error);
        }
    };

    handleChange = async event => {
        let { name, value } = event.target;
        await this.setState({ [name]: value })

    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h1 className="title">I do not have an account</h1>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput name="displayName" type="text" label="Name" value={displayName} handleChange={this.handleChange} />
                    <FormInput name="email" type="email" label="Email" value={email} handleChange={this.handleChange} />
                    <FormInput name="password" type="password" label="Password" value={password} handleChange={this.handleChange} />
                    <FormInput name="confirmPassword" type="password" label="Confirm Password" value={confirmPassword} handleChange={this.handleChange} />

                    <CustomButtom type="submit">Sign Up</CustomButtom>
                </form>

            </div>
        )
    }
}

export default SignUp;