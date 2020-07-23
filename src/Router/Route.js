import React from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Home from '../Home.js';

fuction Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path ='/' comonent={Home}/>
            </Switch>
        
        </BrowserRouter>
    )
}


export default Router