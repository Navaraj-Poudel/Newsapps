import React from 'react'
import './App.css';
import NavBar from './component/NavBar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
 const pageSize = 5
    return (
      <div> 
        <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/"  element = {<News  key="napo" pageSize={pageSize} country ='us' category = 'entertainment'/> }></Route>
          <Route exact path="/home"   element = {<News key="home"pageSize={pageSize} country ='us' category = 'general'/> }></Route>
          <Route exact path="/business"  element = {<News key="business" pageSize={pageSize} country ='us' category = 'business'/> }></Route>
          <Route exact path="/entertainment"   element = {<News key="entertainment" pageSize={pageSize} country ='us' category = 'entertainment'/> }></Route>
          <Route exact path="/general"  element = {<News  key="general" pageSize={pageSize} country ='us' category = 'general'/> }> </Route>
          <Route exact path="health"   element = {<News key="health" pageSize={pageSize} country ='us' category = 'health'/> }> </Route>
          <Route exact path="science" element = {<News  key="science" pageSize={pageSize} country ='us' category = 'science'/> }> </Route>
          <Route exact path="sport"   element = {<News key="sport" pageSize={pageSize} country ='us' category = 'sport'/> }> </Route>
          <Route exact path="technology"   element = {<News key="technology" pageSize={pageSize} country ='us' category = 'technology'/> }> </Route>
          {/* <Route exact path="/bus"> <News pageSize={pageSize} country ='us' category = 'business'/> </Route>
          <Route exact path="/ent"> <News pageSize={pageSize} country ='us' category = 'entertainment'/> </Route>
          <Route exact path="/gen"> <News pageSize={pageSize} country ='us' category = 'general'/> </Route>
          <Route exact path="/hea"> <News pageSize={pageSize} country ='us' category = 'health'/> </Route>
          <Route exact path="/sci"> <News pageSize={pageSize} country ='us' category = 'science'/> </Route>
          <Route exact path="/hom"> <News pageSize={pageSize} country ='us' category = 'general'/> </Route>
          <Route exact path="/spo"> <News pageSize={pageSize} country ='us' category = 'sports'/> </Route>
          <Route exact path="/tech"> <News pageSize={pageSize} country ='us' category = 'technology'/> </Route> */}
        </Routes>
        </Router>

         </div>
    )
  }
  export default App;
