import { Component } from 'react';
import './App.css';
import Header from './components/header/header';

class App extends Component {
  state={
    questionBank:[]
  }
  render(){
    return(
      <div>
        <div className="container">
            <div className="row">
              <div className="col">
              </div>
              <div className="col-6">
                <Header/>
              </div>
              <div className="col">

              </div>

            </div>
        </div>
      </div>
    )
  }
}

export default App;
