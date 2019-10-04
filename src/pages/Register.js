
import React, {Component} from 'react';
import './css/register.css';

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:'',
            email: '',
            password: '',
            confirmpass: '',
            fname: '',
            lname: '',
            mobile:'',
            address: '',
            postcode: ''
        }
    };
    handleFormSubmit = e =>{
        e.preventDefault();
        console.log(`
            --SUBMITTING--
            Username: ${this.state.username}
            Email: ${this.state.email}
            Password: ${this.state.password}
            First Name: ${this.state.fname}
            Last Name: ${this.state.lname}
            Mobile: ${this.state.mobile}
            Address: ${this.state.address}
            Post Code: ${this.state.postcode}
        `);
    };

    handleInputChange = e =>{
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    render()
    {
        return(
            <div>
                <center><h2>Create a TreeCo Account</h2></center>
                <div id="cont15">
                    <h2>User Details</h2>
                    <br/>
                    <form onSubmit={this.handleFormSubmit}>

                        <strong>Username</strong>
                        <br/>
                        <input 
                        type="text" 
                        name="Enter Username" 
                        value={this.state.username}
                        placeholder="username"
                        onChange={e =>this.setState({username: e.target.value})} 
                        required="Please fill the contact field."/>
                        <br/><br/>

                        <strong>Email Address</strong>
                        <br/>
                        <input 
                        type="text" 
                        name="email" 
                        value={this.state.email}
                        placeholder="example@example.com"
                        onChange={e =>this.setState({email: e.target.value})} 
                        required="Please fill the contact field."/>
                        <br/><br/>

                        <strong>Password</strong><br/> 
                        <input 
                        type="password" 
                        name="password" 
                        value={this.state.password} placeholder="Enter Password"
                        onChange={e =>this.setState({password: e.target.value})} 
                        required="Please fill the contact field." formNoValidate/>
                        <br/><br/>

                        <strong>Confirm Password</strong><br/>
                        <input 
                        type="password" 
                        name="confirmpass" 
                        value={this.state.confirmpass} placeholder="Confirm Password"
                        onChange={e =>this.setState({confirmpass: e.target.value})} 
                        required="Please fill the contact field."/>
                        <br/><br/><br/>
                        

                        <h2>Contact Detail</h2>
                        <strong>First Name</strong><br/> 
                        <input 
                        type="text" 
                        name="fname" 
                        value={this.state.fname} 
                        placeholder="Enter First Name"
                        onChange={e =>this.setState({fname: e.target.value})} 
                        required="Please fill the contact field."/>
                        <br/><br/>

                        <strong>Last Name</strong><br/> 
                        <input 
                        type="text" 
                        name="lname" 
                        value={this.state.lname} 
                        placeholder="Enter Last Name"
                        onChange={e =>this.setState({lname: e.target.value})} 
                        required="Please fill the contact field." />
                        <br/><br/>

                        <strong>Contact</strong><br/> 
                        <input type="text"
                        name="mobile" 
                        value={this.state.mobile} 
                        placeholder="Enter Mobile (e.g.0123456789)"
                        onChange={e =>this.setState({mobile: e.target.value})} 
                        required="Please fill the contact field."/>
                        <br/><br/>

                        <strong>Address</strong><br/> 
                        <input 
                        type="text" 
                        name="address" 
                        value={this.state.address} 
                        placeholder="Enter Address"
                        onChange={e =>this.setState({address: e.target.value})} 
                        required="Please fill the contact field."/>
                        <br/><br/>

                        <strong>Post Code</strong><br/> 
                        <input 
                        type="text" 
                        name="postcode" 
                        value={this.state.postcode} 
                        placeholder="Enter Post Code(e.g.0101)"
                        onChange={e =>this.setState({postcode: e.target.value})} 
                        required="Please fill the contact field."/>
                        <br/>

                        <input type="submit"  value="Register"/>
                    </form>
                </div>                   
            </div>
        )
    }     
}


export default Register;