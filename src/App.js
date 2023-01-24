import { Sidebar } from "./components/Sidebar/";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";
import "./index.scss";
import { Overview } from "./components/Dashboard-Overview/Overwiew";

function App() {
  return (
    <>
      <Sidebar />
      <Overview/>
    </>
  );
}

export default App;
