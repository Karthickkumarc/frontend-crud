
import './App.css';

import Navbar from './layout/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Add from './users/Add';
import Edit from "./users/Edit"
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import View from './users/View';

function App() {
  return (

      <Router>
   <Navbar />
<Routes>
  <Route  exact path="/" element={<Home />} />
  <Route exact path="/addUser" element={<Add />} />
  <Route exact path="/edit/:id" element={<Edit />} />
  <Route exact path="/view/:id" element={<View />} />
</Routes>
</Router>
   

 

  );
}

export default App;
