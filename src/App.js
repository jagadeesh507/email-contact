import { ContactUs } from './ContactUs';
import Apply from './Apply';
import Home from './Home';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Home></Home>
    <Routes>
      <Route path='/'></Route>
    <Route path="/ContactUs" element={<ContactUs />}></Route>
      <Route path='/Apply' element={<Apply/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
