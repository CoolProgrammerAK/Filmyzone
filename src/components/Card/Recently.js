import React, { Component } from "react";
import { Card, } from "react-bootstrap";
// import './Recently.css'
class Recently extends Component {
  render() {
      const {link}=this.props

    return (
      <Card className=" my-3" style={{ backgroundColor: "white", border: 0,}}>
        <Card.Img
          className="text-light "
          style={{ borderRadius: 4, width: "100%",  }}
          variant="top"
          src={this.props.photo}
          // srcSet={this.props.photo.includes("i1.wp.com")?this.props.photo:this.props.photo.split("//")[0]+ "//i1.wp.com/"+this.props.photo.split("//")[1]}
        />

        <a href={`/movie/${link}`}  >
          <Card.Text
            
            className="text-dark my-1 text-center p-2"
            style={{ fontFamily: "Poppins" }}
          >
            {this.props.title}
          </Card.Text>
        </a>     </Card>
    );
  }
}

export default Recently