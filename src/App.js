import './App.css';
import Welcome from './component/Welcome';
import { format } from "date-fns";

function App() {
  const date = new Date();
  const fomated = format(date, "dd-MM-yyyy");
  return (
    <div className="App">
      <p>{ format(date, "dd-MM-yyyy") }</p>
      <Welcome name="hi1"></Welcome>
      <input type="text" name="message" placeholder="Message"/><button>Send</button>
    </div>
  );
}

export default App;
