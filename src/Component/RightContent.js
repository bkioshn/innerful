import React from 'react';
import './RightContent.css';

class RightContent extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: '',
            remember: false
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        });
    }

    handleCheck = (name) => (e) => {
        this.setState((prevState) => {
            return({
                [name]: !(prevState.remember)
            })
        })
    } 

    handleSubmit = (e) => {
        console.log("Submit to some place")
    }
    render() {
        return(
            <div className='rightContent'>
                <div className="line"></div>
                <div className='content'>
                    <div className='contentInside'>
                        <h1> HALO </h1>
                        <p>Login to your merchant account</p>
                        <form onSubmit={this.handleSubmit}>
                            <p>UserName</p>
                            <input type="text" value={this.state.userName} name="userName"
                            placeholder="Enter your username" onChange={this.handleChange} /> 
                            <p>Password</p>
                            <input type="password" value={this.state.password} name="password"
                            placeholder="Enter your password" onChange={this.handleChange} />
                            <br/>
                            <input type="radio" value="remember" 
                            checked = {this.state.remember} onChange={this.handleCheck('remember')}/>
                            <label>Remember me</label>
                            <br/>
                            <button> Submit </button> 
                        </form>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default RightContent;