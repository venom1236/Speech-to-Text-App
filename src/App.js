
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SpeechToText from './SpeechToText';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route/>
    </Routes>


    <SpeechToText/>
   </BrowserRouter>

    </div>
  );
}

export default App;
