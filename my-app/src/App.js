import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Article from './components/Article';
import './App.css';
import { render } from '@testing-library/react';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import AddPage from './components/AddPage';


class App extends Component {

  state = {
    articles: [
      {
        title:'The boy who cried wolf',
        content: 'This is the story of the boy who cried wolf. ierghero wefpwi'
      },
      {
        title:'Five men',
        content: 'Five men were walking down the street one day. the end.'
      },
      {
        title:'23 and me',
        content: 'Human chromosomes are extremely complex and the scope is insufficient here.'
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

        <Route path="/articleview/:id" render={props=>(<React.Fragment>
        <HomePage {...props}/>
       </React.Fragment> )}/>

       <Route path="/searchview/:id" render={props=>(<React.Fragment>
        <SearchPage {...props} articles={this.state.articles}/>
       </React.Fragment> )}/>

        <Route path="/addview/:id" render={props=>(<React.Fragment>
        <AddPage {...props}/>
        </React.Fragment> )}/>

        </Router>

    );
  }
}
export default App;
