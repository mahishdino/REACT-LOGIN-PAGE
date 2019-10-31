import React from "react";
import Ripples from 'react-ripples'
import loginUmg from "../../images/loginid.png";
export class Login extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div className="base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="image">
    
                    <img src={loginUmg} />
<div className="form">
    <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" placeholder="username"/>
</div>
<div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="password"/>
</div>
</div>
</div>
<div className="footer">
<Ripples>
    <button type="button" className="btn">Login</button>
    </Ripples>
</div>
            </div>
        </div> 
    }
}