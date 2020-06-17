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
                <button style={buttonStyle} onClick={this.onLogout}>Logout</button>
                <h3>Hello {this.props.match.params.id}</h3>
                <div style={boxLeft} onClick={this.clickSelect}>
                    <h2 style={{textAlign:'center',marginTop:boxLeft.height/2.2}}>Search for an article</h2>
                </div>

                <div style={boxRight} onClick={this.clickAdd}>
                    <h2 style={{textAlign:'center', marginTop:boxLeft.height/2.2}}>Add an article</h2>
                </div>
            </div>
        );
    }
}

const boxLeft = {
    marginLeft:window.innerWidth/4, 
    marginTop:window.innerHeight/4,
    width:window.innerWidth/4,
    height:window.innerHeight/2,
     border: '1px solid black',
     backgroundColor: 'grey',
     cursor:'pointer'
    }

const boxRight = {
    marginLeft:window.innerWidth/2, 
    marginTop:-window.innerHeight/2 - 2,
    width:window.innerWidth/4,
    height:window.innerHeight/2,
     border: '1px solid black',
     backgroundColor: 'grey',
     cursor:'pointer'
    }

    const buttonStyle = {
        cursor: 'pointer',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        backgroundColor: 'red',
        width: 100,
        height:30,
        radius:5,
        float: 'right',
        marginRight:50
    }

export default HomePage;