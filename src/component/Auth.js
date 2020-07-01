import React, { Component } from 'react'

export class Auth extends Component {
    constructor() {
        super()
        this.state = {
            isRegister: false
        }
    }

    login() {
        console.warn("state", this.state)

        fetch('http://cmkserver.com/staff/login', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)

        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                localStorage.setItem("auth", JSON.stringify(resp.data.firstName))

            })
        })
    }

    register() {
        console.warn("state", this.state)

        fetch('http://cmkserver.com/staff', {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state)

        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                localStorage.setItem("auth", JSON.stringify(resp.data.firstName))
            })
        })
    }

    render() {


        return (
            <div>

                {
                    !this.state.isRegister ?
                        <div>
                            <input type="text"
                                placeholder="companyID"
                                onChange={(e) => { this.setState({ companyID: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="staffID"
                                onChange={(e) => { this.setState({ staffID: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="password"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />
                            <button onClick={() => this.login()}>Login</button>
                            <button onClick={() => this.setState({ isRegister:true })}>go to Resgister</button>
                        </div>
                        :
                        <div>
                            <input type="text"
                                placeholder="companyID"
                                onChange={(e) => { this.setState({ companyID: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="staffID"
                                onChange={(e) => { this.setState({ staffID: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="password"
                                onChange={(e) => { this.setState({ password: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="confirm password"
                                onChange={(e) => { this.setState({ c_password: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="branchID"
                                onChange={(e) => { this.setState({ branchID: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="positionID"
                                onChange={(e) => { this.setState({ positionID: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="noOfHoliday"
                                onChange={(e) => { this.setState({ noOfHoliday: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="lastname"
                                onChange={(e) => { this.setState({ lastName: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="firstname"
                                onChange={(e) => { this.setState({ firstName: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="gender"
                                onChange={(e) => { this.setState({ gender: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="phone"
                                onChange={(e) => { this.setState({ phone: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="dob"
                                onChange={(e) => { this.setState({ dob: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="email"
                                onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />
                            <input type="text"
                                placeholder="address"
                                onChange={(e) => { this.setState({ address: e.target.value }) }} /><br /><br />
                            <button onClick={() => this.register()}>Resgister</button>
                            <button onClick={() => this.setState({ isRegister:false })}>go to login</button>
                        </div>
                }
            </div>
        )
    }
}

export default Auth