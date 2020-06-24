import React, { Component } from 'react'

export class Listing extends Component {
    constructor() {
        super()
        this.state = {
            items: null
        }
    }

    componentDidMount() {
        fetch('http://192.168.128.116:8088/staff').then((result) => {
            result.json().then((data) => {
                console.log("data", data);
                this.setState({ items: data })
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.items ?
                        this.state.items.map((item) =>
                            <div>
                                <span>{item.firstName}</span>
                            </div>) : null
                }
            </div>
        )
    }
}

export default Listing
