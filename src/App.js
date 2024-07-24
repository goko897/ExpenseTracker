import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Auth } from './web-pages/auth/index'
import { ExpenseTracker } from './web-pages/expensetracker/index'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/dashboard" exact element={<ExpenseTracker />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
