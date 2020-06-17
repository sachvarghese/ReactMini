import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 

class LoginPage extends Component {

    state={
        id:'',
        pass:'',
        showError:false
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }
        );
    }

    validateCredentials = () => {
        for(var i=0;i<this.props.users.length;i++){
            if(this.props.users[i].id===this.state.id && this.props.users[i].password===this.state.pass){
                return true;
            }
        }
        return false;
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.validateCredentials()) {
            this.state.showError = false;
            this.props.history.push('/articleview/'+ this.state.id);
        }
        else {
            this.setState({
                id:this.state.id,
                pass:this.state.pass,
                showError:true
            });
            console.log(this.state.showError);
        }

        
    }

    render() {
        return (
            <div>
            <form style={{marginLeft: (window.innerWidth/2)-centerBoxId.width/2}}>
             <input type="text" name="id" style={centerBoxId} placeholder="ID" value={this.state.id} onChange={this.onChange}/>
             <br/>
             <input type="password" name="pass" style={centerBoxPass} placeholder="Password" onChange={this.onChange}/>
             <br/>
             <button type="Submit" style={submitStyle} onClick={this.onSubmit}>Submit</button>
            <h3 style={this.state.showError? showErrorMessage:errorMessage}>Incorrect credentials</h3>
            </form>
            </div>
        );
    }
}

const centerBoxId = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 400,
    height: 30,
    marginTop: (window.innerHeight/2)-150
}

const centerBoxPass = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 400,
    height: 30,
    marginTop: (window.innerHeight/2)-300
}

const submitStyle = {
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'lightgreen',
    width: 100,
    height:30,
    radius:5,
    marginLeft: centerBoxPass.width/2.5,
    marginTop: centerBoxPass.height
}

var errorMessage = {
    color:'red',
     marginLeft:window.innerWidth/10.5, 
     visibility:'hidden'
}

var showErrorMessage = {
    color:'red',
     marginLeft:window.innerWidth/10.5, 
     visibility:'visible'
}
export default withRouter(LoginPage);