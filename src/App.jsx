import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ListEmployeeComponent from './components/ListEmployeeComponent';
import Headercomponent from './components/Headercomponent';
import FooterComponent from './components/FooterComponent';
import AddEmployeeComponent from './AddEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <Headercomponent />
        <div className='container'>
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />} />
            
            <Route path="/employees" element={<ListEmployeeComponent />} />

            <Route path="/add-employee" element={<AddEmployeeComponent />} />

            <Route path="/edit-employee/:id" element={<AddEmployeeComponent />} />
            
            <Route path="/delete-employee/:id" element={<ListEmployeeComponent />} />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
