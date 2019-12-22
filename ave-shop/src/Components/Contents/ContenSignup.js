import React, { Component } from 'react';
import './Content.css';

class ContenSignup extends Component {
    constructor(props) {
        super(props);
        this.state = { mail : '',
        password :'',
        password2 :''};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit =this.handleSubmit.bind(this);
    
    }
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [name] : value });}
    
    handleSubmit(e){
        alert(this.state.mail);
        e.preventDefault();
    }
    

    render() {
        return (
            <div>
                <div className="content__sign-up">
                <form className="content__sign-in">
                    <h4 className="content__sign-in-h4">SIGN IN</h4>
                    <input type="text" name="name"  placeholder="Your E-mail"/><br/>
                    <input type="password" name="password" placeholder="Password"/><br/>
                    <div className="btn btn-info submit-login">SIGN IN</div>
                </form>
                <form className="content__register" onSubmit={this.handleSubmit}>
                <h4 className="content__sign-in-h4" >REGISTER</h4>
                    <input type="text" value={this.state.mail} onChange={this.handleChange}  name="mail" placeholder="Your E-mail"/><br/>
                    <input type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password"/><br/>
                    <input type="password" value={this.state.password2} onChange={this.handleChange} name="password2" placeholder="Password"/><br/>
                    <input className="submit-login"type="checkbox" value={this.state.checkbox} onChange={this.handleChange} name="checkbox"/>  Tôi đông ý với các điều khoản  <br/>
                    <div className="btn btn-outline-dark submit-login" type="submit" value="Submit">REGISTER</div>
                </form>
                    
                </div>
                
            </div>
        );
    }
}

export default ContenSignup;