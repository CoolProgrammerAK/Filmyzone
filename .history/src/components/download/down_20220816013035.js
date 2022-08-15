import React, { Component } from "react";
import "../Details/detail.css";
import { Container, Row, Col } from "react-bootstrap";
import SideCard from "../sideCard";
import "./down.css";
import Error from '../../error'
import "react-toastify/dist/ReactToastify.css";
import {showtoast} from '../toast/toast'
import Toastcontainer from "../toast/toastContainer";
import Loading from '../Loading/loading'
class Down extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},loading:true,error:false
    };
  }
componentWillMount(){
  
document.title="Start Downloading"
}
  componentDidMount() {
    if (this.props.match.params.fname != "none") {
      fetch(`${process.env.REACT_APP_MOVIEURL}/download`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify({
          fname: `${this.props.match.params.fname}`,
          fsip: `${this.props.match.params.fsip}`,
        }),
      })
        .then((res) => res.json())
        .then((datas) => {
          if(datas.error){
           this.setState({error:true,loading:true})
          }
          else
         { this.setState({ data: datas.result[0],loading:false });
        

            // var a=document.createElement("a")
            // a.href=this.state.data.link
            // a.download=this.state.data.link
            // document.body.appendChild(a)
            // a.click()
            // a.remove()
          }
         
          
        }).catch(err=>{
          console.log(err.toString())
  
        })
    }
    else{
      this.setState({loading:false})
    }
  }

  render() {
    
    if(this.state.loading){
      return <><Loading></Loading></>
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
      <>
        <Container className="mb-5 p-0" fluid>
          <Toastcontainer></Toastcontainer>
          <Row style={{}}>
            <Col lg="8">
              <Container fluid
                className="my-1 p-0"
                style={{}}
              >
                <div
                  style={{
                    backgroundColor: "rgba(146, 143, 143, 0.74)",
                    height: 36.4,
                  }}
                >
                  <p style={{ fontSize: 17, padding: 2, paddingLeft: 8 }}>
                    <span id="head">Home</span>
                    <span id="head">{">> "}</span>

                    <span
                      id="head2"
                      style={{ fontWeight: "bold", fontSize: 19 }}
                    >
                      Start Downloading
                    </span>
                  </p>
                </div>
              </Container>
              <Container
                fluid
                className="mb-1 "
                style={{
                  marginTop: "1.9rem",
                }}
              >
                <h2 id="downhead"> Start Downloading</h2>
                <div className="text-center my-3">
                  <h3 id="downHead">Thank you for using our service!</h3>
                  <span id="para" className="mt-3">  <a style={{textDecoration
                        :'underline'}} onClick={()=>showtoast("Downloading started",true)}  href={this.state.data.link} download>
                        Click the following link</a> to download movie</span>
                        <span id="para" className="mt-3">  <a style={{textDecoration
                        :'underline'}} href={this.state.data.gdrive} download>
                        Click the following link</a> to download movie</span>

                  <p className="mt-3">
                    <span id="indicate">
                      {this.props.match.params.fname != "none"
                        ? "Please wait.."
                        : "Sorry.."}
                    </span>
        
                      {this.props.match.params.fname != "none"
                        ? <span id="para"> Your downloading will start in few seconds. If not <a style={{textDecoration
                        :'underline'}} onClick={()=>showtoast("Downloading started",true)}  href={this.state.data.link} download>
                          Click here</a></span>
                        :<span  id="para"> Your Requested Movie Has not Been Released yet online. Please Try To Download Another Movie</span>}
                
                  </p>
                  <div>
                    <img src="/thanks.gif" alt="dfs"></img>
                  </div>
                  {this.props.match.params.fname === "none" && <p className="mt-3">
                  <span id="bigpara">Full Movie Will Be Uploaded Soon</span><br/>
                    <span id="bigindicate">Please try again later</span>
                  </p>
              
                  }
                </div>
              
              </Container>
              <Container className="text-center p-0">
                {
                    this.state.data.ss1 && (<>
                     
                        <div className="my-4 px-3 py-2" id="outborder">
                          <div id="inborder" className="mb-4 p-1">
                            <h4
                              id="color"
                              className="mb-0"
                              style={{
                                fontFamily:
                                  "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                              }}
                            >
                              ScreenShots
                            </h4>
                          </div>
                          <div>
                            <img
                              className="d-block w-100 mb-4"
                              srcSet={this.state.data.ss1.includes("i1.wp.com")
                              ?this.state.data.ss1:this.state.data.ss1.split("//")[0]+ "//i1.wp.com/"+this.state.data.ss1.split("//")[1]}
                              alt="Third slide"
                            />
                            {/* .includes("i1.wp.com") */}
                              {/* ?this.state.data.ss1:this.state.data.ss1.split("//")[0]+ "//i1.wp.com/"+this.state.data.ss1.split("//")[1] */}
                            <img
                              className="d-block w-100 mb-4"
                              srcSet={this.state.data.ss2.includes("i1.wp.com")
                              ?this.state.data.ss2:this.state.data.ss2.split("//")[0]+ "//i1.wp.com/"+this.state.data.ss2.split("//")[1]}
                              alt="Third slide"
                            />
                            <img
                              className="d-block w-100 mb-3"
                              srcSet={this.state.data.ss3.includes("i1.wp.com")
                              ?this.state.data.ss3:this.state.data.ss3.split("//")[0]+ "//i1.wp.com/"+this.state.data.ss3.split("//")[1]}
                              alt="Third slide"
                            />
                          </div>
                        </div></>
                    )
                }
                </Container>
                <Container
                 className="my-1"
                 style={{ paddingLeft: "1.6rem", paddingRight: "2.4rem" }}>
                <div>
                  <span style={{color:"darkgray"}} >
                  If you have any suggestion and feedback regarding Filmyzone website then sure let us know. We’ll try to further optimize our site. The site is Completely secure, fast and easy to use.
                  </span>
                </div>
                </Container>
            </Col>
            <Col lg="4">
              <SideCard></SideCard>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}}

export default Down;
