import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import ArticleInstance from './ArticleInstance'
class SearchPage extends Component {

    state = {
        substring: '',
        artVisibility: 'hidden'
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            artVisibility: 'hidden'
        }
        );
    }

    homeClick = () => {
        console.log(this.props)
        this.props.history.push('/articleview/' + this.props.match.params.id);
    }

    doArticlesExist = () => {
        for(var i=0; i<this.props.articles.length; i++) {
            if(this.props.articles[i].title.includes(this.state.substring)) {
                return true;
            }
        }
        return false;
    }

    searchArticles = () => {
        console.log(this.state.substring);
        if(this.doArticlesExist()){
            this.setState({
                substring: this.state.substring,
                artVisibility: 'visible'
        });
        }
        else {
            console.log("No");
            this.setState({
                substring: this.state.substring,
                artVisibility: 'hidden'
        });
        }
    }

    render() {
        return(
            <React.Fragment>

            <div>
            <button style={buttonStyle} onClick={this.homeClick}> Home</button>
            <br/><br/><br/><br/>
            <label style={searchTextStyle}>Search:</label>
            <input type="text" name="substring" style={searchStyle} value={this.state.substring} onChange={this.onChange}/>
            <button style={searchButtonStyle} onClick={this.searchArticles}> Search</button>
            <br/><br/><br/>
            </div>
            
            <div style={{visibility:this.state.artVisibility}}>
            <ArticleInstance arts={this.props.articles} substring={this.state.substring}/>
            </div>
            </React.Fragment>
            )

        return (
            <div>
                <button style={buttonStyle} onClick={this.homeClick}> Home</button>
                <br/><br/><br/><br/>
                <label style={searchTextStyle}>Search:</label>
                <input type="text" style={searchStyle}/>
                <button style={searchButtonStyle}> Search</button>
                <br/><br/><br/>
            </div>        
        )
        
    }
}

const buttonStyle = {
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

const searchStyle = {
    width: 200,
    height: 25,
    fontSize:12,
    fontWeight:'bold',
    marginTop: window.innerHeight/10,
    marginLeft: 20
}

const searchTextStyle = {
    color:'black',
    fontSize:20,
    fontWeight:'bold',
    marginLeft: window.innerWidth/2.7,
    marginTop: window.innerHeight/10

}
 const searchButtonStyle = {
    cursor: 'pointer',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'yellow',
    width: 100,
    height:30,
    radius:10,
    marginTop: window.innerHeight/10,
    marginLeft: 20
 }

export default withRouter(SearchPage);