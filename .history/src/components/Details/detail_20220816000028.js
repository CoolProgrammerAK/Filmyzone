import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SideCard from "../sideCard";
import Error from "../../error";
import "./detail.css";
import Loading from "../Loading/loading";
import Card from "../Card/Recently";
class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      related: [],
      description: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_MOVIEURL}/movie-description`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        link: `${this.props.match.params.year}/${this.props.match.params.movie}`,
      }),
    })
      .then((res) => res.json())
      .then((datas) => {
        if (datas.error) {
          this.setState({ error: true, loading: false });
        } else {
          this.setState({
            description: datas.result[0].single_post,
            loading: false,
          });
          this.setState({ related: datas.result[0].related_post.related });
        }
      })
      .catch((err) => {
        console.log(err.toString());
      });
  }
  componentWillMount() {
    document.title = "Movie Detail";
  }
  render() {
    if (this.state.error) {
      return (
        <>
          <Error Npage={false}></Error>
        </>
      );
    } else if (
      this.state.description.heading &&
      this.state.related.length &&
      !this.state.loading
    ) {
      return (
        <>
          <Container className="mb-5 p-0 " fluid>
            <Row style={{}}>
              <Col lg="8">
                <Container fluid className="my-1" style={{ padding: 0 }}>
                  <div
                    style={{
                      backgroundColor: "rgba(146, 143, 143, 0.74)",
                      height: "fit-content",
                    }}
                  >
                    <p style={{ fontSize: 17, padding: 2, paddingLeft: 8 }}>
                      <span id="head">Home</span>
                      <span id="head">{" » "}</span>
                      <span id="head">{this.props.match.params.year}</span>
                      <span id="head">{" » "}</span>
                      <span
                        id="head2"
                        style={{ fontWeight: "bold", fontSize: 19 }}
                      >
                        {this.state.description.title.replace(
                          "Full Movie Download",
                          ""
                        )}
                      </span>
                    </p>
                  </div>
                </Container>
                <Container
                  fluid
                  className="mb-1"
                  style={{
                    marginTop: "1.9rem",
                    padding: 0,
                  }}
                >
                  <h4
                    id="heading"
                    className="my-3"
                    style={{
                      color: "white",
                      fontFamily: "Hind",
                      fontWeight: "bold",
                      fontSize: 28,
                    }}
                  >
                    {this.state.description.heading}
                  </h4>
                </Container>
                <div
                  style={{
                    marginTop: -11,
                  }}
                >
                  <p>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="white"
                        className="bi bi-clock"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                      </svg>
                    </span>
                    <span className="pl-2" style={{ color: "white" }}>
                      {this.state.description.time}
                    </span>
                  </p>
                </div>
                <Container className="my-1" style={{}}>
                  <Row className="p-1 bg-light">
                    <Col md="5">
                      <div style={{ paddingTop: 15, paddingBottom: 15 }}>
                        <img
                          style={{ width: "100%" }}
                          srcSet={this.state.description.photo}
                        ></img>
                      </div>
                    </Col>
                    <Col style={{ padding: 20 }}>
                      <div>
                        <h3>
                          {this.state.description.title.replace(
                            "Full Movie Download",
                            ""
                          )}
                        </h3>
                        <img
                          className="my-1"
                          src="https://1.bp.blogspot.com/-14SHVhWuL8g/XqnULTVrboI/AAAAAAAAIcM/VH7vdvy0FhsvOQlUVj-7Db1-81n0SlNzACLcBGAsYHQ/s200/watch1080.png"
                        ></img>
                        <p id="data">
                          <span>{this.state.description.genre}</span>
                          <span> | </span>
                          <span>{this.state.description.category}</span>
                        </p>
                      </div>
                      <hr></hr>

                      <p id="data2">{this.state.description.desc}</p>
                      <hr></hr>
                      <p id="data">
                        <span>Actors</span>
                        <span> : </span>
                        <span style={{ fontWeight: 400 }}>
                          {this.state.description.actors}
                        </span>
                      </p>
                    </Col>
                  </Row>
                </Container>

                <Container className="p-0">
                  <div className="text-center">
                    <div
                      className="text-light mt-4 mb-3"
                      style={{
                        fontSize: 25,
                        fontFamily: "Poppins",
                        fontWeight: "bold",
                      }}
                    >
                      {this.state.description.heading}
                    </div>
                    <div>
                      <p id="movieinfo">Movie File Information</p>
                      <p id="margin">
                        <span id="lang">Language :</span>
                        <span id="hind">
                          {" "}
                          {this.state.description.language}
                        </span>
                      </p>
                      <p id="margin">
                        <span id="lang">Size :</span>
                        <span id="hind"> {this.state.description.size}</span>
                      </p>
                      <p id="margin">
                        <span id="lang">Genres :</span>
                        <span id="hind"> {this.state.description.genre}</span>
                      </p>
                      <p id="margin">
                        <span id="lang">Quality :</span>
                        <span id="hind"> {this.state.description.quality}</span>
                      </p>
                      <p id="margin">
                        <span id="lang">Country :</span>
                        <span id="hind"> {this.state.description.country}</span>
                      </p>
                    </div>
                    <div className="my-4 px-3 py-2" id="bg">
                      <div>
                        <h3 id="dwnload" className="mb-4 p-1">
                          Click below to download Full movie
                        </h3>
                      </div>
                      {!this.state.description.heading.includes("Coming") ? (
                        this. <a
                         href={`/download/${this.state.description.fsip}/${this.state.description.fname}`}
                         target="blank"
                       >
                         {" "}
                         <img src="/download.png"></img>
                       </a>
                        <a
                          href={`/download/${this.state.description.fsip}/${this.state.description.fname}`}
                          target="blank"
                        >
                          {" "}
                          <img src="/download.png"></img>
                        </a>
                      ) : (
                        <>
                          <p
                            style={{
                              color: "darkred",
                              fontFamily: "cursive",
                              fontSize: 19,
                              fontWeight: " bolder",
                            }}
                          >
                            Full Movie Coming Soon
                          </p>
                          <a href={`/download/none/none`} target="blank">
                            {" "}
                            <img src="/download.png"></img>
                          </a>
                        </>
                      )}
                    </div>

                    {/* <div className="mt-4">
                      <p id="movieinfo">Storyline</p>
                      <p
                        className="text-justify"
                        style={{ color: "darkgrey", fontSize: 16 }}
                      >
                        {this.state.description.coming_soon == ""
                          ? this.state.description.review_heading
                          : this.state.description.review_details}
                      </p>
                    </div> */}
                  </div>
                  <div>
                    <div
                      className="text-light mt-4 mb-3"
                      style={{ fontSize: 25, fontFamily: "Poppins" }}
                    >
                      You may also like:
                    </div>
                    <div id="divide">
                      <Card
                        photo={this.state.related[0].article_photo}
                        link={this.state.related[0].article_link}
                        title={this.state.related[0].article_text}
                      ></Card>
                      <Card
                        photo={this.state.related[1].article_photo}
                        link={this.state.related[1].article_link}
                        title={this.state.related[1].article_text}
                      ></Card>
                      <Card
                        photo={this.state.related[2].article_photo}
                        link={this.state.related[2].article_link}
                        title={this.state.related[2].article_text}
                      ></Card>
                    </div>
                    <div></div>
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
    } else {
      return (
        <>
          <Loading></Loading>{" "}
        </>
      );
    }
  }
}

export default Detail;
