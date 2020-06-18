import React, { Component } from 'react';

class HomePage extends Component {

    logProps = () => {
        console.log(this.props);
    }

    clickSelect = () => {
        console.log("Left");
        this.props.history.push('/searchview/' + this.props.match.params.id);
    }

    clickAdd = () => {
        console.log("Right");
        this.props.history.push('/addview/'  + this.props.match.params.id);

    }

    onLogout = (e) => {
        e.preventDefault();
        this.props.history.push('/');
    }
    render() {
        this.logProps();
        return (
            <div>
                <button class="btn btn-danger" style={buttonStyle} onClick={this.onLogout}>Logout</button>
                <h3>Hello {this.props.match.params.id}</h3>

                <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-center">
                <ul class="navbar nav" class="nav justify-content-center">

                    <li class="nav-item" style={{cursor:'pointer'}}>
                        <h3 class="nav-link active" style={{color:'white'}} onClick={this.clickSelect}>Search for an article</h3>
                    </li>

                    <li class="nav-item active" style={{cursor:'pointer'}}>
                        <h3 class="nav-link active" style={{color:'white'}} onClick={this.clickAdd}>Create new article</h3>
                    </li>

                </ul>
                </nav>

                <img src={ require('../images/icon.jpg') } style={{ marginLeft:window.innerWidth/4,marginTop:50,width:window.innerWidth/2,height:window.innerHeight/1.5}}/>
                
            </div>
        );
    }
}

const boxLeft = {
    marginLeft:window.innerWidth/4, 
    marginTop:window.innerHeight/4,
    width:window.innerWidth/4,
    height:window.innerHeight/5,
     border: '1px solid black',
     backgroundColor: 'grey',
     cursor:'pointer'
    }

const boxRight = {
    marginLeft:window.innerWidth/2, 
    marginTop:-window.innerHeight/5,
    width:window.innerWidth/4,
    height:window.innerHeight/5,
     border: '1px solid black',
     backgroundColor: 'grey',
     cursor:'pointer'
    }

    const buttonStyle = {
        cursor: 'pointer',
        float: 'right',
        marginRight:50
    }

export default HomePage;