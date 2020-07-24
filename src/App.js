import React from 'react';
import { Switch, Route, BrowserRouter } from "react-router-dom";


//CSS
import './App.css';

//COMPONENTS
import Layout from './Components/hoc/Layout/Layout'
import InteractivePiano from '../src/Components/demo/components/InteractivePiano'
import HomePage from './Components/Homepage/Homepage'
import Contact from './Components/Contact/Contact'
import Music from './Components/Beats/Soundcloud/Music'
import Beethoven from './Components/Beethoven/beethoven';
import Survey from './Components/Beats/Survey/Survey';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Layout />

    <Switch>
    <Route path='/contact' component={Contact} />
    <Route
            path="/piano"
            render={(props) => (
              <div>
                <InteractivePiano />
                <Beethoven />
              </div>
            )}
          />
    <Route
            path="/beats"
            render={(props) => (
              <div>
                <Survey />
                <Music />
              </div>
            )}
          />
      <Route
            path="/"
            render={(props) => (
              <div>
                <HomePage />
              </div>
            )}
          />

    </Switch>


    </div>
    </BrowserRouter>
  );
}

export default App;
