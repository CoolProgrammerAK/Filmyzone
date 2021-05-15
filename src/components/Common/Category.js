import React, { Component } from 'react'

import {Container,} from "react-bootstrap";
import Card from "../Card/Recently";
import "../Home/Home.css";
import Header from "../Header/header";
import Loading from '../Loading/loading'
import Error from '../../error'

class Category extends Component {
constructor(props) {
    super(props)

    this.state = {
         data:[],
         lastpage:0,pages:[],loading:true,disabled:false,error:false
    }
}

componentDidMount(){
    fetch(`${process.env.REACT_APP_MOVIEURL}/category/${this.props.match.params.id}/page/1`).then(res=>res.json()).then(datas=>{
        if(datas.error){

          this.setState({error:true,loading:false})
        }
        else
        {this.setState({data:datas.result.slice(1,)})
        console.log(datas)
        this.setState({lastpage:datas.result[0].pageno})
        if(this.state.lastpage>5){
          for (let index = 1; index < 6; index++) {
        
            this.state.pages.push(index)
            }
            
            this.setState({loading:false})
         }
         else{
          for (let index = 1; index <= this.state.lastpage; index++) {
            this.setState({disabled:true})
            this.state.pages.push(index)
            }
            
            this.setState({loading:false})
         }}
         
            
         }).catch(err=>{
          console.log(err.toString())
  
        })
        
}


    render() {
      if(this.state.loading){
        return (
          <>
          <Loading></Loading></>
        )
      }
      else if(this.state.error){
        return (
          <>
            <Error Npage={false}></Error>   
          </>
        )
      }
      else{
        return (
           
            <Container fluid id="fit" className="mt-3">
            <Container fluid id="fit">
              <Header title= {"Category:"} extra={ `  ${this.props.match.params.id.slice(0,1).toUpperCase() + this.props.match.params.id.slice(1, this.props.match.params.id.length)}`}></Header>
              <Container fluid  id="show">
                {this.state.data &&
                  this.state.data.map((i, index) => (
                    <Card photo={i.image} link={i.link} title={i.title} key={index}></Card>
                  ))}
              </Container>
            </Container>
            <div className="p-3 m-4 text-center ">
      
              {this.state.pages.map((i, index) => {
                return (
                  <a href={`/category/${this.props.match.params.id}/page/${i}`} key={index}>
                    <div className="page" >
                      {i}
                    </div>
                  </a>
                );
              })}
      
           {this.state.pages.length && !this.state.disabled &&  <> <div className="page" style={{ pointerEvents: "none" }}>
                ...
              </div>
              <a href={`/category/${this.props.match.params.id}/page/${this.state.lastpage}`}>
              <div className="page">{this.state.lastpage}</div>
              </a>
              </>
            
            }
            {this.state.pages.length &&  
              
              <a href={`/category/${this.props.match.params.id}/page/2`}>
              <div className="page">Next</div>
              </a>
            
            }
            </div>
          </Container>
        )
    }}
}

export default Category
