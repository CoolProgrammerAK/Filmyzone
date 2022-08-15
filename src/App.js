import React, { Component } from 'react'
import NavBar from './components/Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Redirect,Route,Switch, withRouter} from 'react-router-dom'
import Home from './components/Home/Home';
import Detail from './components/Details/detail';
import { Page } from './components/PageComponent/page';
import Category from './components/Common/Category';
import SearchP from './components/Common/Search';
import Categorypage from './components/Common/Categorypage';
import Down from './components/download/down';
import './index.css'
import Forward from './components/Common/Forward';
import Footer from './components/Footer/footer';
import Error from './error';
class App extends Component {
componentDidMount(){
  document.body.style.backgroundColor="black"
  document.body.style.overflowX="hidden"
}

  render() {
    return (<>
      <div id="main-container" >
        <NavBar></NavBar>
        <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}  ></Route>
          <Route path="/movie/:year/:movie" exact component={Detail}  ></Route>
          <Route path="/category/:id" exact component={Category}   ></Route>
          <Route path="/search/q=:id" exact component={SearchP}   ></Route>
          <Route path="/category/:id/page/1" exact  component={Forward} ></Route>
          <Route path="/category/:id/page/:no" exact component={Categorypage} ></Route>

          <Route path="/page/1" exact  ><Redirect to="/"></Redirect></Route>
          <Route path="/page/:id" exact component={Page}   ></Route>
          <Route path="/download/:fsip/:fname" exact component={Down}   >
          
          </Route>
          <Route > <Error Npage={true}></Error> </Route> 
        </Switch>
        </BrowserRouter>
      
    
      
    
      </div>
          <Footer></Footer>
      </>
    )
  }
}

export default withRouter(App)

 // 
