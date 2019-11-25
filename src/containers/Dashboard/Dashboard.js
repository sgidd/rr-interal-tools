import React, { Component } from 'react';
import MenuAppBar from '../../components/MenuAppBar/MenuAppBar';
import Main from '../../components/Main/Main';


class Dashboard extends Component {

    render(){

        return(
           <div style={{backgroundColor:'#eee',minHeight:'100vh',maxHeight:'100%'}}>
                <MenuAppBar logout = {this.props.logout}/>
                <Main />
           </div>
        );
    }
}

export default Dashboard;