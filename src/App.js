import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Main from './components/MainComponent';
import './App.css';
import store from './redux/configureStore';
import Login from './components/LoginComponent';

class App extends Component {
  render() {
    return (
      <Provider store={ store}>
        <BrowserRouter>
          <div>
            <Login/>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
