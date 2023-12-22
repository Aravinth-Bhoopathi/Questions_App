import React from "react";
import RegisterForm from "../UserRegister/RegisterForm";
import {Link,Route} from 'react-router-dom'
import Home from "./Home";
import UserDashboard from "../UserRegister/UserDashboard";
import AdminDashBoard from "../Admin/AdminDashBoard";
import Admin from "../Admin/Admin";
import PrivateRouter from "./PrivateRouter";
import AdminRouter from "./AdminRouter";
import '../css/navbar.css'

const NaviBar = (props) =>{

    return (
        <div>
            <div className="navigation">
                <span>Questions App</span>
                <Link className="link"  to='/admin'>Admin</Link> 
                <Link className="link" to='/user'>User</Link>
            </div>
           
            <Route path="/" component={Home} exact/>
            <Route path='/admin' component={Admin} exact={true} />
            <Route path='/user' component={RegisterForm} exact={true}  />
          
            <PrivateRouter path='/userDashboard' component={UserDashboard} /> 
   
            <AdminRouter path='/adminDashboard' component={AdminDashBoard} />
        </div>
    )
}

export default NaviBar