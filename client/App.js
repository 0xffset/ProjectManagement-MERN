import React from "react";


import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './core/Home';
import SignUp from './user/Signup';
import Profile from './user/Profile';
import SignIn from './auth/Signin';
import Dashboard from './core/dashboard';
import {isAuthenticated} from './auth/auth-helper';
//Modals
import editProfileModal from './core/editProfile.modal';

const App = (
   <BrowserRouter>
    <div>
        
          <Route path='/' render={() => (
                isAuthenticated() ? (
                  <Redirect to='/dashboard'/>
                ) : (
                  <Route path='/' exact component={Home} />
                )
          )} />

          <Route path='/profile/:userId' exact component={Profile} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/signin'  component={SignIn} />
          <Route path='/user/edit/:userId' component={editProfileModal} /> 

       
    </div>
   </BrowserRouter>
)
export default App