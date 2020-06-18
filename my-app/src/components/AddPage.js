import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 

class AddPage extends Component {

    state={
        title:'',
        content:'',
        showError:'',
        showSuccess:'',
        message:'',
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }
        );
    }

    homeClick = () => {
        this.props.history.push('/articleview/' + this.props.match.params.id);
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.title!=='' && this.state.content!=='') {
            this.setState({
                title:'',
                content:'',
                showError:false,
                showSuccess:true,
                message:'Article added successfully!'
            });
            this.props.addArticle(this.state.title, this.state.content);
        }
        else {
            this.setState({
                title:this.state.title,
                content:this.state.content,
                showError:true,
                showSuccess:false,
                message:'Please fill both title and content'
            });
        }
    }

    render() {
        return (
            <div>
            <button style={homeStyle} onClick={this.homeClick}> Home</button>
            
            <form style={{marginLeft: (window.innerWidth/2)-centerBoxText.width/2}}>
             <input type="text" name="title" style={centerBoxText} placeholder="Title" value={this.state.title} onChange={this.onChange}/>
             <br/>
             <textarea type="text" name="content" style={centerBoxContent} placeholder="Content" value={this.state.content} onChange={this.onChange}/>
             <br/>
             <button type="Submit" style={submitStyle} onClick={this.onSubmit}>Publish</button>
             <h3 style={this.state.showError? showErrorMessage:this.state.showSuccess? showSuccessMessage:successMessage}>{this.state.message}</h3>
            </form>
            </div>
        );
    }
}

const centerBoxText = {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    width: 400,
    height: 30,
    marginTop: (window.innerHeight/10)
}

const centerBoxContent = {
    textAlign:'left',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 0,
    width: 400,
    height: 400,
    marginTop: (window.innerHeight/10)-50
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
    marginLeft: centerBoxContent.width/2.7,
    marginTop: 30,
}

var errorMessage = {
    color:'red',
     marginLeft:window.innerWidth/18, 
     visibility:'hidden',
     float:'center'
}

var showErrorMessage = {
    color:'red',
     marginLeft:window.innerWidth/18, 
     visibility:'visible',
     float: 'center'
}

var successMessage = {
    color:'green',
     marginLeft:window.innerWidth/18, 
     visibility:'hidden',
     float: 'center'

}

var showSuccessMessage = {
    color:'green',
     marginLeft:window.innerWidth/18, 
     visibility:'visible',
     float: 'center'
}

const homeStyle = {
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'green',
    width: 100,
    height:30,
    radius:10,
    float: 'right',
    marginRight:50
}
export default withRouter(AddPage);