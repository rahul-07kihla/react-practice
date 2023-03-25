import './App.css';
import Welcome from './component/Welcome';
import { format } from "date-fns";
import Input from './component/Input';
import Button from './component/Button';

function App() {
  const date = new Date();
  const fomated = format(date, "dd-MM-yyyy");
  return (
    <div className="App">
      <p>{ format(date, "dd-MM-yyyy") }</p>
      <Welcome name="test"></Welcome><Button></Button>
    </div>
  );
}

export default App;
