import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

export class Nav extends Component {
    render() {
        return (
            <div>
                <Link to="home" >Home</Link>
                <Link to="about" >About</Link>
                <Link to="list" >Product Listing</Link>
                <Link to="/" >Login</Link>
            </div>
        )
    }
}

export default Nav
