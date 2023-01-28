import { Sidebar } from "./components/Sidebar/";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";
import "./index.scss";
import { Overview } from "./components/Dashboard-Overview/Overwiew";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Tickets } from "./components/Dashboard-Tickets/Dashboard-Tickets";

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </>
  );
}

export default App;
