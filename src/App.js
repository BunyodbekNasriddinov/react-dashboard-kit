import { Sidebar } from "./components/Sidebar/";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./assets/styles/main.css";
import "./index.scss";
import { Overview } from "./components/Dashboard-Overview/Overwiew";
import {Tickets} from "./components/Tickets/Tickets"
import "./components/Tickets/Tickets.css"
import {Tasks} from "./components/Tasks/Tasks"
import "./components/Tasks/Tasks.css"

function App() {
  return (
    <>
      <Sidebar />
      <Overview/>
      <div className="container gap-5 d-flex justify-content-end pt-5">
    <Tickets/>
    <Tasks/>
    </div>
    </>
  );
}

export default App;
