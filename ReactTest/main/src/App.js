import './App.css';
import UserHome from './Components/User/UserHome';
const connectDB = require('./Configs/database')

function App() {
  connectDB()
  return (
    <div className="App">
      <UserHome/>
    </div>
  );
}

export default App;
