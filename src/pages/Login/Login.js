import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo2.png';

class Login extends Component {

    state = {
        email: '',
        password: ''
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {

        const { email, password } = this.state;

        return (
            <div className="container">
            <div className="row">
                <div className="col-md-4 offset-md-4 mt-5 mb-5">
                    <Link to="/">
                        <img className="signup-img" src={Logo} alt="" />
                    </Link>
                    <form onSubmit={this.submitHandler}>
                        <div className="form-group">
                            <input 
                                type="email" 
                                className="form-control" 
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={this.changeHandler}
                            />
                            <input 
                                type="password" 
                                className="form-control" 
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={this.changeHandler}
                            />
                            <input 
                                type="submit" 
                                className="form-control" 
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
        );
    }
}

export default Login;