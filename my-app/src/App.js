import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Article from './components/Article';
import './App.css';
import { render } from '@testing-library/react';
import LoginPage from './components/LoginPage';
import ArticleView from './components/ArticleView';

class App extends Component {

  state = {
    arts: [
      {
        id: 1,
        title:'The boy who cried wolf',
        completed: true
      },
      {
        id: 2,
        title:'Five men',
        completed: false
      },
      {
        id: 3,
        title:'23 and me',
        completed: false

      }
    ],

    users: [
      {
        id: 'A-8811',
        password: 'igloo123'
      },
      {
        id: 'A-9988',
        password: 'impala11'
      }

    ]
  }

  markComplete = (id) =>{
    console.log(id)
    this.setState( {arts: this.state.arts.map(art=> {
      if(id===art.id) {
        art.completed = !art.completed;
      }
      return art;
    }) 
  });
  }

  delArticle = (id) => {
    console.log(id)
    this.setState(
      {
        arts: [...this.state.arts.filter(art => art.id!==id)]
      }
    );
    console.log(this.state.arts)
  }

  render() {
    return (
      /*
      <div className="App">
        <h1 className="Main">Welcome</h1>
        <Article markComplete={this.markComplete} arts={this.state.arts}
          delArticle={this.delArticle}
        />
      </div>
      */
     <Router>
       <Route exact path="/" render={props=>(<React.Fragment>
        <LoginPage users={this.state.users} />
       </React.Fragment> )}/>

        <Route path="/ArticleView/:id" render={props=>(<React.Fragment>
        <ArticleView {...props}/>
       </React.Fragment> )}/>
      </Router>
    );
  }
}
export default App;
