import React, { useEffect, useState } from "react";
import {Container} from "react-bootstrap";
import Card from "../Card/Recently";
import "./Home.css";
import Loading from '../Loading/loading'
import Error from '../../error'

const Home = (props) => {
  const [data, setdata] = useState([]);
  const [pages] = useState([]);
  const [lastpage,setlastpage] = useState(0);
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(false)
  var url=process.env.REACT_APP_MOVIEURL
  useEffect(() => {
    fetch(`${url}/latest/1`).then(res=>res.json()).then(datas=>{

      if(datas.error){
        setloading(false)
        seterror(true)
      }
      else{

        setdata(datas.result.slice(1,))
        setloading(false)
        setlastpage(parseInt(datas.result[0].pageno))
      }
 
       }).catch(err=>{
        console.log(err.toString())

      })
      
  }, [])
  
  useEffect(() => {
    for (let index = 1; index < 6; index++) {
        
      pages.push(index)
      }
  
}, [])


if(loading){
  return (
    <>
         
    <Loading/>
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
       
        <Container fluid  id="show">
          {data &&
            data.map((i, index) => (
              <Card photo={i.image} link={i.link} title={i.title} key={index}></Card>
            ))}
        </Container>
      </Container>
      <div className="p-3 m-4 text-center ">

        {pages.map((i, index) => {
          return (
            <a href={`/page/${i}`} key={index}>
              <div className="page" key={index}>
                {i}
              </div>
            </a>
          );
        })}

     {pages.length &&  <> <div className="page" style={{ pointerEvents: "none" }}>
          ...
        </div>
        <a href={`/page/${lastpage}`}>
        <div className="page">{lastpage}</div>
        </a>
        
        <a href="/page/2">
        <div className="page">Next</div>
        </a></>
      
      }
      </div>
    </Container>
  );
}
  
};

export default Home;
