import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

export default class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
			redirect: false,
			registerError: '',
			registerName: '',
			registerEmail: '',
            registerPassword: '',
            registerRedirect: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	onSubmit(event) {
        //console.log(this.state);
        event.preventDefault();
        const registrant = {
            registerName: this.state.registerName,
            registerEmail: this.state.registerEmail,
            registerPassword: this.state.registerPassword
        }
        console.log(registrant);
        axios.post('/auth/register', registrant)
            .then(response => {
                console.log(response);
                this.setState({
                    registerRedirect: true
                })
            })
            .catch(error => {
                console.log(error);
            });
	}
    
    render() {
        if(this.state.registerRedirect) return <Redirect to='/users/dashboard' />;
        else return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">User Register</div>
                            <div className="card-body">
                                <form name="register" onSubmit={this.onSubmit}>
                                    {
                                        (this.state.registerError) ? (
                                            <label>{this.state.registerError}</label>
                                        ) : (null)
                                    }
                                    <div className="form-group row">
                                        <label htmlFor="registerName" className="col-md-4 col-form-label text-md-right">Name</label>

                                        <div className="col-md-6">
                                            <input value={this.state.registerName} onChange={this.onChange} type="text" name="registerName" className="form-control" id="registerName" placeholder="Full Name"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="registerEmail" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                        <div className="col-md-6">
                                            <input value={this.state.registerEmail} onChange={this.onChange} type="email" name="registerEmail" className="form-control" id="registerEmail" placeholder="someone@somewhere.com"/>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="registerPassword" className="col-md-4 col-form-label text-md-right">Password</label>

                                        <div className="col-md-6">
                                            <input value={this.state.registerPassword} onChange={this.onChange} type="password" name="registerPassword" className="form-control" id="registerPassword" placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-0">
                                        <div className="col-md-6 offset-md-4">
                                            <button type="submit" className="btn btn-primary">
                                                Register
                                            </button>
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
