import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Importing the components
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";

function App() {

  return (
    <>
    <center>
      <ClockHeading/>
      <ClockSlogan/>
      <CurrentTime/>
    </center>
    </>
  )
}

export default App
