import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddEmployee from "./pages/AddEmployee";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add_employee" element={<AddEmployee />} />
      </Routes>
    </div>
  );
}
export default App;