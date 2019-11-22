import React, { Component } from 'react';
import MenuAppBar from '../../components/MenuAppBar/MenuAppBar';
import Main from '../../components/Main/Main';


class Dashboard extends Component {

    render(){

        return(
           <React.Fragment>
                <MenuAppBar />
                <Main />
           </React.Fragment>
        );
    }
}

export default Dashboard;