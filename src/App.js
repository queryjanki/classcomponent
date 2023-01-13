import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Home from './Home';
import Form from './Form';

function App() {

const id = 12432 , idn= 12345;
const color = "red";

  return (
    <div className="App">
      {/* <Home id = {id} color ={color} idn = {idn}/>
      <hr></hr>
      <Counter/>
      <hr></hr> */}
      <Form/>
    </div>
  );
}

export default App;
