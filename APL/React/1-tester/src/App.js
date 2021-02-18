import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Navigation} from './components/Navigation'
function App() {
  return (
    <BrowserRouter> 
      <Navigation />
    </BrowserRouter> 
  );
}

export default App;
