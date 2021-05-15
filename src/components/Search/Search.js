import React, { Component } from "react";
import { Container, InputGroup, FormControl,Button } from "react-bootstrap";
import "./search.css";
import "react-toastify/dist/ReactToastify.css";

import {showtoast} from '../toast/toast'
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      error: "",
    };
  }

  formsubmit = (e,y) => {
   if (e.keyCode===13) {
     
   }
      if (this.state.text ) {
        window.location.pathname = `/search/q=${this.state.text}`;
        this.setState({ error: "", text: "" });}
       else {
        this.setState({ error: "Please enter search value" });

       showtoast("Please enter search value",false)
      }
    
  };
  
  
  formsubmit2 = (e) => {
    if(e.keyCode===13){
     
      if(this.state.text){ 
        window.location.pathname = `/search/q=${this.state.text}`;
        this.setState({ error: "", text: "" });}
    else{
      this.setState({ error: "Please enter search value" });
 
       
      
  
    }}

  }
        
     
   

  render() {
    return (
      <Container fluid className="d-flex" id="flexEnd">
        <InputGroup size="lg" id="search" className="  my-3 ">
          <FormControl
            placeholder="What are you looking for?"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            onKeyDown={(e)=>this.formsubmit2(e)}
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            style={{
              border: "none",
              borderColor: "none",
              fontSize: 14,
              color: "white",
              outline: "none",
              background:"rgb(81, 81, 81)"
              
            }}
          />
          <InputGroup.Prepend
           
            style={{
             background:"rgb(81, 81, 81)",
              paddingTop: 9,
              paddingRight: 9,
            }}
          >
            <svg
              width="1.2em"
              height="1.2em"
              viewBox="0 0 16 16"
              className="bi bi-search"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>
          </InputGroup.Prepend>
        </InputGroup>
        <Button onClick={(e) => this.formsubmit(e)}  variant="danger" className="ml-2 my-3">Search</Button>
     
      </Container>
    );
  }
}

export default Search;
