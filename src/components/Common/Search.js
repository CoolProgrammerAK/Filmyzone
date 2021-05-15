import React, { Component } from 'react'
import {
    Container,
    
} from "react-bootstrap";
import Card from "../Card/Recently";
import "./Search.css";
import Loading from '../Loading/loading'
import Header from "../Header/header";
import "react-toastify/dist/ReactToastify.css";
import Empty from '../nocard/Nocard'
import Error from '../../error'
class SearchP extends Component {
constructor(props) {
    super(props)

    this.state = {
         data:[],
         lastpage:0,pages:[],loading:true,error:false
    }
}

componentWillMount(){
    fetch(`${process.env.REACT_APP_MOVIEURL}/search/q=${this.props.match.params.id}`).then(res=>res.json()).then(datas=>{
        if(datas.error){
          
          this.setState({error:true,loading:false})
        }
        else{
          this.setState({data:datas.result,loading:false})
        }
       
     
         }).catch(err=>{
          console.log(err.toString())
  
        })
}  

    render() {
      const {id}=this.props.match.params
       
      if (this.state.loading) {
        return (<>
          <Loading></Loading>
          </>
        )
      } 
      else if(this.state.error){
        return (
          <>
            <Error Npage={false}></Error>   
          </>
        )
      }
      else {
        return (
          <Container fluid id="fit" className="mt-3">
      <Container fluid id="fit">
      <Header title={`Showing results for  \"${id}\" `}></Header>

      {
        this.state.data.length>0? (this.state.data.length>4? <Container fluid  id="show">
         
        {  this.state.data.map((i, index) => (
            <Card photo={i.image} link={i.link} title={i.title} key={index}></Card>
          ))}
      </Container>:
      <Container fluid  id="show2">
      {
        this.state.data.map((i, index) => (
          <Card photo={i.image} link={i.link} title={i.title} key={index}></Card>
        ))}
    </Container> 
        ):<Empty></Empty>
      }
        
      </Container>
          
         <div style={{height:50}}
         ></div>
          </Container>
        )
      }
      
    }
}

export default SearchP
