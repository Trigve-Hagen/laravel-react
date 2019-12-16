import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            ifOpen: false,
        }
    }

    openNav() {
        this.setState({
            ifOpen: true
        });
        document.getElementById("main").style.marginLeft = "250px";
    }

    closeNav() {
        this.setState({
            ifOpen: false
        });
        document.getElementById("main").style.marginLeft = "0";
    }
    
    render() {
        let className = this.state.ifOpen ? 'sidenav-open' : 'sidenav-closed';
        return (
            <div>
                <div id="mySidenav" className={`sidenav ${className}`}>
                    <a href="#" className="closebtn" onClick={() => this.closeNav()}>&times;</a>
                    <Link to='/'>Home</Link>
                    <Link to='/pool/login'>Login</Link>
                    <Link to='/pool/register'>Register</Link>
                </div>

                <button className={`sidenav-open-button btn btn-danger`} onClick={() => this.openNav()}>Menu</button>
            </div>
        )
    }
}

export default Menu;
