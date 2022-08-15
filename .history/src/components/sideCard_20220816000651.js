import React, { Component } from 'react'
import {
    Container,
    Button,
    InputGroup,
    FormControl,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
  import "react-toastify/dist/ReactToastify.css";

  import {showtoast} from './toast/toast'
class SideCard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       text:""
    }
  }
  formsubmit=(e)=>{
  
    if(e.keyCode===13){
     
      if(this.state.text){ 
      window.location.pathname=`/search/q=${this.state.text}`
              this.setState({error:"",text:""})
    }
    else{
      this.setState({error:"Please enter search value"})
      
      showtoast(this.state.error,false)
  
    }}

}
    render() {
        return (
            <Container className="mt-1" style={{ backgroundColor: "black" }}>
            <div id="boxHeader">Search</div>
            <div>
              <InputGroup
                className=" px-3 "
                style={{ marginTop: 15, marginBottom: 15 }}
              >
                <FormControl
                  placeholder="What are you looking for?"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  value={this.state.text}
                
                  onChange={(e)=>this.setState({text:e.target.value})}
                  onKeyDown={(e)=>this.formsubmit(e)}
                />
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fillRule="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                      />
                    </svg>
                  </InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </div>
            <div id="boxHeader">Categories</div>

            <div
              className="px-3"
              style={{ marginTop: 15, marginBottom: 15 }}
            >
              <Link id="colorB" to={`/category/hindi-movies`}>
                <Button
                  id="bgC"
                  variant="light"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  Hindi
                </Button>
              </Link>
              <Link id="colorB" to={`/category/old-movies`}>
                <Button
                  id="bgC"
                  variant="light"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  Old
                </Button>
              </Link>
              <Link id="colorB" to={`/category/hindi-dubbed-movies`}>
                <Button
                  id="bgC"
                  variant="light"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  Hindi-dubbed
                </Button>
              </Link>
              <Link id="colorB" to={`/category/hollywood-movies`}>
                <Button
                  id="bgC"
                  variant="light"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  English
                </Button>
              </Link>
              <Link id="colorB" to={`/category/south-movies`}>
                <Button
                  id="bgC"
                  variant="light"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  South
                </Button>
              </Link>
            </div>
            <div id="boxHeader">Yearly</div>
            <div
              id="boxContainer"
              className="px-3"
              style={{ marginTop: 15, marginBottom: 15 }}
            >
              <Link id="color" to={`/category/2011-movies`}>
                <Button
                  variant="info"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  2011
                </Button>
              </Link>
               <Link id="color" to={`/category/2021-movies`}>
                <Button variant="info" block>
                  2021
                </Button>
              </Link>
              <Link id="color" to={`/category/2020-movies`}>
                <Button variant="info" block>
                  2020
                </Button>
              </Link>
              <Link id="color" to={`/category/2019-movies`}>
                <Button variant="info" block  style={{ marginTop: ".5rem" }}>
                  2019
                </Button>
              </Link>
              <Link id="color" to={`/category/2018-movies`}>
                <Button
                  variant="info"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  2018
                </Button>
              </Link>
              <Link id="color" to={`/category/2017-movies`}>
                <Button
                  variant="info"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  2017
                </Button>
              </Link>
              <Link id="color" to={`/category/2016-movies`}>
                <Button
                  variant="info"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  2016
                </Button>
              </Link>
              <Link id="color" to={`/category/2015-movies`}>
                <Button
                  variant="info"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  2015
                </Button>
              </Link>

              <Link id="color" to={`/category/2014-movies`}>
                <Button
                  variant="info"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  2014
                </Button>
              </Link>
              <Link id="color" to={`/category/2013-movies`}>
                <Button
                  variant="info"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  2013
                </Button>
              </Link>
              <Link id="color" to={`/category/2012-movies`}>
                <Button
                  variant="info"
                  block
                  style={{ marginTop: ".5rem" }}
                >
                  2012
                </Button>
              </Link>
              
            </div>
          </Container>
        )
    }
}

export default SideCard

