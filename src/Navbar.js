import React, { Component } from 'react'
import app from "./base"
import "./App.css"

 class Navbar extends Component {
    render() {
        return (
            <navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container"><a id="NavRFP" className="navbar-brand">React-Firebase-Project</a>
                <a className="Nav-Link" href="./" id="Logout" onClick={() => app.auth().signOut()}>Çıkış</a>
                </div>
            </navbar>
        )
    }
}

export default Navbar;
