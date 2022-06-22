import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import "./styles.css";
import HomePage from "./components/pages/index";
import MainNavbar from "./components/main-navbar";
import Footer from "./components/footer";


function App(props) {
  
  return (
    <div className="App">
      <div>
        <Router>
          <MainNavbar />
          <Route exact path="/">
            <HomePage />
          </Route>
        </Router>
        <Footer />
      </div>
    </div>
  );
}


export default App;
