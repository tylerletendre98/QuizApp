import { Component } from 'react';
import './App.css';
import APIKEY from './key';
import axios from 'axios';
import Header from './components/header/header';
import Question from './components/question/questions';

class App extends Component {
  state={
    questionBank:[]
  }

  componentDidMount(){
    axios.get(`https://quizapi.io/api/v1/questions?apiKey=${APIKEY}&limit=10`)
    .then((res)=>{
      this.setState({questionBank: res.data})
      console.log(this.state.questionBank)
    })
  }
  render(){
    return(
      <div>
        <div className="container">
            <div className="row">
              <div className="col"></div>
              <div className="col-6">
                <Header/>
              </div>
              <div className="col"></div>
            </div>
            <div className="row">
            <div className="col"></div>
              <div className="col-6">
                <Question questionBank={this.state.questionBank}/>
              </div>
              <div className="col"></div>
            </div>

            </div>
        </div>
      
    )
  }
}

export default App;
