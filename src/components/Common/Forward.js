import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Forward extends Component {
    componentDidMount(){
        const category=this.props.match.params.id
        window.location.pathname=`category/${category}`
    }
    render() {
       

        return (
            <div></div>
        )
    }
}

export default Forward
