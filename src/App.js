import './App.css';
import { Contact } from './components';
import { HashRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      {/* <HashRouter basename="/">
        <Route exact path="/"> */}
            <Contact />
          {/* </Route> */}
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
