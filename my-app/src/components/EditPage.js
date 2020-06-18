import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 

class EditPage extends Component {

    state = {
        title:'<Article does not exist>',
        content:'<Article does not exist>'
    }
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }
        );
    }

    publishClick = () => {
        console.log(this.props);
        this.props.editArticle(this.state.title, this.state.content, this.props.match.params.articleid);
        this.backClick();
    }

    backClick = () => {
        this.props.history.push('/viewarticle/' + this.props.match.params.id + '/' +this.props.match.params.articleid);
    }

    homeClick = () => {
        this.props.history.push('/articleview/' + this.props.match.params.id);
    }

    getTitle = () =>{
        console.log("got title")
        for(var i=0; i<this.props.articles.length;i++) {
            if(this.props.articles[i].id===this.props.match.params.articleid) {
                this.setState({
                    title: this.props.articles[i].title,
                    content: this.props.articles[i].content
                });
                console.log(this.props.articles[i].title)
            }
        }
    }
    
    componentDidMount = () =>{
        console.log(this.getTitle());
    }
    render() {
        return (
            <div>
            <button style={homeStyle} onClick={this.homeClick}> Home</button>
            
            <div style={{marginLeft: (window.innerWidth/2)-centerBoxText.width/2}}>
             <input type="text" name="title" style={centerBoxText} value={this.state.title} onChange={this.onChange}/>
             <br/>
             <textarea type="text" name="content" style={centerBoxContent} value={this.state.content} onChange={this.onChange}/>
             <br/>
             <button style={backBtnStyle} onClick={this.backClick}>Back</button>
             <button style={publishBtnStyle} onClick={this.publishClick}>Publish</button>
            </div>
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

const publishBtnStyle = {
    width: 70,
    backgroundColor:'lightgreen',
    padding: '5px',
    marginLeft:window.innerWidth/8,
    marginTop: window.innerHeight/20,
    cursor: 'pointer'
}

const backBtnStyle = {
    width: 50,
    backgroundColor:'lightgreen',
    padding: '5px',
    marginLeft:window.innerWidth/20,
    marginTop: window.innerHeight/20,
    cursor: 'pointer'
}
export default withRouter(EditPage);