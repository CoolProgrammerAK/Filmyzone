import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/header";import Loading from '../Loading/loading'
import Card from "../Card/Recently";
import "../Home/Home.css";
import Paginate from "../pagination";
import Error from '../../error'
export function Page(props) {
  const [data, setdata] = useState([]);
  const [lastpage, setlastpage] = useState(0);
  const [pages] = useState([]);
  const [loading, setloading] = useState(true)
 const [error, seterror] = useState(false)
 var url=process.env.REACT_APP_MOVIEURL
  useEffect(() => {

    fetch(`${url}/latest/${props.match.params.id}`)
      .then((res) => res.json())
      .then((datas) => {
        if(datas.error){
         seterror(true)
         setloading(false)
        }
        else{
        setlastpage(datas.result[0].pageno);
        setdata(datas.result.slice(1));
        setloading(false)
        }
      }).catch(err=>{
        console.log(err.toString())

      })
  }, [props.match.params.id]);
  
 useEffect(() => {
   
    
  for (let index = parseInt(props.match.params.id) - 4; index <= parseInt(props.match.params.id) + 4; index++) {
    if (index > 1 && index <parseInt(lastpage)) {
     pages.push(index)
    }

  }
  
 
 }, [data])


  if(loading){
    return (
      <>
      <Loading></Loading>
      </>
    )

  }
  else if(error){
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
        <Header title={`Page ${props.match.params.id}`}></Header>
        {}
          <Container fluid  id="show">
            {data &&
              data.map((i, index) => (
                <Card photo={i.image} link={i.link} title={i.title} key={index}></Card>
              ))}
          </Container>
        </Container>
  
  
          
       
        {data.length > 0 && (
          <Paginate
            lastpage={parseInt(lastpage)}
            currentpage={parseInt(props.match.params.id)}
            pages={pages}
            url="/page"
          />
         
        )}
      </Container>
    );
  }
}







