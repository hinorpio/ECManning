import React, { Component } from 'react'

export class Listing extends Component {
    constructor() {
        super()
        this.state = {
            items: null
        }
    }

    componentDidMount() {
        fetch('http://cmkserver.com/staff').then((result) => {
            result.json().then((data) => {
                console.log("data", data.data);
                this.setState({ items: data.data })
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
