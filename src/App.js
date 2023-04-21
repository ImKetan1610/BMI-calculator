import "./App.css";
import BMIcalculator from "./components/BMIcalculator";
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <p className="title">BMI calculator</p>
      </header>
      <BMIcalculator />
      <footer>
        <div className="hRule"></div>
        <div className="dummy">
          <div className="dummy1">
            <h3>Dummy Email</h3>
            <p>- have any query?</p>
            <p>- please send a mail</p>
            <p>- bmi@dummymail.com</p>
          </div>
          <div className="dummy2">
            <h3>Dummy Blogs</h3>
            <p>- What is BMI?</p>
            <p>- How to crete BMI calculator?</p>
            <p>- dummy blogs</p>
          </div>
          <div className="dummy3">
            <h3>Dummy logo</h3>
            <div className="logoDiv">
              <img className="logo" src={logo} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
