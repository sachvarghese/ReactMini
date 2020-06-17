import React, { Component } from 'react';

class ArticleItem extends Component {



    

    render() {
        return this.props.arts.filter(art => art.title.includes(this.props.substring)).map((art) => (
            <div style={artStyle}>
                {art.title}
                <button style={buttonStyle}>View</button>
                <br/>
                </div>
        ));
    }
    
}

const btnStyle = {
    backgroundColor:'red',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    float: 'right' ,   
}

const artStyle = {
    border: '1px solid black',
    width: window.innerWidth/2,
    backgroundColor:'lightgrey',
    padding:'20px',
    marginLeft: window.innerWidth/4,
    fontSize: 20
}

const buttonStyle = {
    cursor: 'pointer',
    backgroundColor: 'lightgreen',
    float:'right'
}
export default ArticleItem;