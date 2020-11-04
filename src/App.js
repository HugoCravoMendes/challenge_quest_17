import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';
import QuoteCard from './Components/QuoteCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartoon: {}
    };
    this.getCartoon = this.getCartoon.bind(this);
  }

  componentDidMount() {
    this.getCartoon();
  }

  getCartoon() {
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          cartoon: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <QuoteCard cartoon={this.state.cartoon} />
        <button className="switchButton" type="button" onClick={this.getCartoon}>Get cartoon</button>
      </div>
    );
  }
}

export default App;
