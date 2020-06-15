import React, { Component } from 'react';

class ArticleView extends Component {

    logProps = () => {
        console.log(this.props);
    }

    render() {
        this.logProps();
        return (
            <div>
                <h1>Hello {this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default ArticleView;