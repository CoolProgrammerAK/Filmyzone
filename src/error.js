import React, { Component } from 'react'
 import './error.css'
class error extends Component {

    componentDidMount(){
        document.body.style.backgroundColor="#222"
      }
      render(){
        const {Npage}=this.props
      return (<>
        <div id='notfound'>
        <div className='notfound'>
          <div className='notfound-404'>
            <img id="imgerror" src={Npage?"404.svg":"/serverDown.svg"}></img>
          </div>
          <p id="connect">{Npage?"Connection Lost":"Network Error"}</p>
          <p id="detail">{Npage?"Looks like the page you are looking to visit doesn't exist."
          :"Due to slow or no internet connection , page can't be loaded."}</p>
          <p id="detail">{Npage?"Please check the url and try again.":"Please connect to the internet and try again."}</p>
          <a href={Npage?'/':window.location.pathname}>{Npage?"home page":"reload"}</a>
        </div>
      </div></>
      )
    }
}

export default error
