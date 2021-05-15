import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    render() {
        return (
            <div className="d-flex " id="asa" >
              {this.props.extra ? (<><span
              className="bigg"
              style={{
                color: "white",
             
                fontWeight: "600",
              }}
            >
             {this.props.title}
            </span><span>""</span>

            <span
              className="bigg"
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
             {this.props.extra}
            </span></>):<span
              className="bigg "
              style={{
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "bold",
              }}
            >
             {this.props.title}
            </span>

}
             {/* title= {`Category:`} extra={ ` ${(this.props.match.params.id).toUpperCase()}`} */}
          </div>
        )
    }
}

export default Header
