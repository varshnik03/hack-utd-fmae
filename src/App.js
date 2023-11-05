import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Start from './Start';
import Qone from './Qone';
import Qtwo from './Qtwo';
import Qthree from './Qthree';
import Result from './Result';
import StartPage from './StartPage'

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}>
          <Route path="Qone" element={<Qone />} />
          <Route path="Qtwo" element={<Qtwo />} />
          <Route path="Qthree" element={<Qthree />} />
          <Route path="Result" element={<Result />} />
          <Route path="StartPage" element={<StartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
