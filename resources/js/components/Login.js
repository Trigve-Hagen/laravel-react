import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
			loginEmail: '',
            loginPassword: '',
            loginError: '',
            loginRedirect: false
		}
		this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
		this.setState({ [e.target.name]: e.target.value});
	}

	onSubmit(event) {
        event.preventDefault();
        const login = {
            loginEmail: this.state.loginEmail,
            loginPassword: this.state.loginPassword
        }
        console.log(login);
        axios.post('/auth/login', login)
            .then(response => {
                console.log(response);
                this.setState({
                    loginRedirect: true
                })
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    render() {
        if(this.state.loginRedirect) return <Redirect to='/users/dashboard' />;
        else return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">User Login</div>
                            <div className="card-body">
                                <form name="login" onSubmit={this.onSubmit}>
                                    {
                                        (this.state.loginError) ? (
                                            <label>{this.state.loginError}</label>
                                        ) : (null)
                                    }
                                    <div className="form-group row">
                                        <label htmlFor="loginEmail" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                        <div className="col-md-6">
                                            <input type="text" value={this.state.loginEmail} onChange={this.onChange} name="loginEmail" className="form-control" id="loginEmail" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="loginPassword" className="col-md-4 col-form-label text-md-right">Password</label>
                                        <div className="col-md-6">
                                            <input type="password" value={this.state.loginPassword} onChange={this.onChange} name="loginPassword" className="form-control" id="loginPassword" placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-6 offset-md-4">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" name="remember" id="remember"/>

                                                <label className="form-check-label" htmlFor="remember">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-0">
                                        <div className="col-md-8 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Login
                                            </button>
                                            <a className="btn btn-link" href="http://officepool.site/password/reset">
                                                Forgot Your Password?
                                            </a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
