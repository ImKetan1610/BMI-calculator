import React from "react";
import { useState } from "react";
// import NumericUpDown from 'bootstrap-react-numeric-up-down';

const BMIcalculator = () => {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [category, setCategory] = useState("");
  const [ageAlert, setAgeAlert] = useState("");

  const calculateBmi = () => {
    console.log(height, gender);
    if (age > 100 || age < 2 || height < 24 || height > 96) {
      setBmi("");
      setAgeAlert("Please add valid data");
      return;
    }
    setAgeAlert("");
    let heightM = (height * 2.54) / 100;
    const bmiValue = weight / (heightM * heightM);
    setBmi(bmiValue);
    if (gender === "male") {
      if (bmiValue < 18.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        setCategory("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        setCategory("Overweight");
      } else {
        setCategory("Obesity");
      }
    } else {
      if (bmiValue < 20.5) {
        setCategory("Underweight");
      } else if (bmiValue >= 20.5 && bmiValue <= 26.9) {
        setCategory("Normal Weight");
      } else if (bmiValue >= 27 && bmiValue <= 31.9) {
        setCategory("Overweight");
      } else {
        setCategory("Obesity");
      }
    }
  };
  return (
    <div className="mainContainer">
      <div>
        <label>Weight (Kg):</label>
        <br />
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Age:</label>
        <br />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label>Gender:</label>
        <br />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">--Please Select Any Option--</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div>
        <label>Height (inches):</label>
        <br />
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="btnDiv">
        <button className="computeBtn" onClick={calculateBmi}>Compute</button>
      </div>

      {ageAlert && (
        <>
          <p className="showAlert">{ageAlert}</p>
          <div
            style={{
              width: "200px",
              margin: "auto",
              fontSize: "10px",
            }}
          >
            <h3>Points need to Remember</h3>
            <li>Age must be in between 2-100 years</li>
            <li>Height must be in between 24-96 inches</li>
          </div>
        </>
      )}
      {bmi && (
        <h3>
          Your bmi is {bmi}. You are {category}
        </h3>
      )}
    </div>
  );
};

export default BMIcalculator;
