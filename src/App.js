import './App.css';
import Sidebar from "./Components/Sidebar";
import Tweets from "./Components/Tweets"
import Trens from "./Components/Trens"
function App() {
  return (
    <div className="twitter">
      <Sidebar />
      <Tweets />
      <Trens />
    </div>
  );
}

export default App;
