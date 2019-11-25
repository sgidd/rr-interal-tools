import React from 'react';
import './App.css';
import Routes from '../../routes/routes';
import SignIn from '../../components/SignIn/SignIn';
import LogIn from '../../components/LogIn/LogIn';
import Dashboard from '../Dashboard/Dashboard';
import {BrowserRouter} from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      loggedIn : false
    }
  }

  loggedInHandler = () =>{
    this.setState( {
      loggedIn : true
    })
    console.log(this.state.loggedIn);
  }

  logoutHandler =() => {
    this.setState( {
      loggedIn : false
    })
    console.log(this.state.loggedIn);

  }

  render(){
    console.log( this.state.loggedIn );
    let returnElement = this.state.loggedIn ? <Dashboard logout ={this.logoutHandler}/> : <SignIn isLoggedIn= {this.loggedInHandler.bind(this)}/>
    console.log(returnElement);
    return(
      <BrowserRouter>
        {returnElement}
      </BrowserRouter>
    );
    
  }
}

export default App;
