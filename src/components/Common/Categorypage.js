import React , { useState, useEffect}  from 'react'
import { Container } from "react-bootstrap";
import Header from "../Header/header";
import Card from "../Card/Recently";
import "../Home/Home.css";

import Paginate from '../pagination';
import Loading from '../Loading/loading'
import "react-toastify/dist/ReactToastify.css";
import Error from '../../error'
const Categorypage = (props) => {
    const [data, setdata] = useState([]);
    const [lastpage, setlastpage] = useState(0);
    const [pages, setpages] = useState([]);
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState(false)
    var url=process.env.REACT_APP_MOVIEURL
    useEffect(() => {
        fetch(`${url}/category/${props.match.params.id}/page/${props.match.params.no}`)
      .then((res) => res.json())
      .then((datas) => {
        if(datas.error){
          setloading(false)
          seterror(true)
        }
        else{

          setlastpage(datas.result[0].pageno);
          setdata(datas.result.slice(1));
          setloading(false)
        }
     
      }).catch(err=>{
        console.log(err.toString())

      })
    }, [props.match.params.no])

    useEffect(() => {
      for (let index = parseInt(props.match.params.no) - 4; index <= parseInt(props.match.params.no) + 4; index++) {
        if (index > 1 && index <parseInt(lastpage)) {
         pages.push(index)
        }
    
      }
     
     }, [lastpage])
   if (loading){
     return(
       <>
       <Loading></Loading></>
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
     return(
<Container fluid id="fit" className="mt-3">
      <Container fluid id="fit">
      <Header title= {"Category:"} extra={ ` ${props.match.params.id.slice(0,1).toUpperCase() + props.match.params.id.slice(1, props.match.params.id.length)}`}></Header>
        <Container fluid  id="show">
          {data &&
           data.map((i, index) => (
              <Card photo={i.image} link={i.link} title={i.title} key={index}></Card>
            ))}
        </Container>
      </Container>
  {data.length >0 &&
  <Paginate
  lastpage={parseInt(lastpage)}
  currentpage={parseInt(props.match.params.no)}
  pages={pages}
  url={`/category/${props.match.params.id}/page`}
/>
  
  
  
 
}
  </Container>
)
   }
    
      
}

export default Categorypage

