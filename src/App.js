import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:null
        };
    }

    componentDidMount() {
      this._dbTest();
    }
    
    _dbTest = async() => {
      const res = await axios.get('/api/test');
      this.setState({username : res.data.str});
      console.log(res.data);
    }

  render() {
    const {username} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            {username ? `Hello ${username}` : 'Hello World'}
          </header>
        </div>
    );
    ;
  }
}

export default App;