function totalScore() {
    let Age = document.getElementById("Age").value;
    let BMIResponse = document.getElementById("BMIResponse").value;
    let BloodPressure = document.getElementById("BloodPressure").value;
    let FamilyDisease = document.getElementById("FamilyDisease").value;
    
    Age = parseInt(Age);
  BMIResponse = parseInt(BMIResponse);
    BloodPressure = parseInt(BloodPressure);
  FamilyDisease = parseInt(FamilyDisease);

    console.log("Age: "+Age);
    console.log("BMIResponse: "+BMIResponse);
    console.log("BloodPressure: "+BloodPressure);
    console.log("FamilyDisease: "+FamilyDisease);


    // Calculating BMI based on Height and Weight


let Height =document.getElementById("height-in-feet").value;
console.log("Height: " + Height);
Height = parseInt(Height);
let HeightInches =document.getElementById("inches").value;
console.log("HeightInches: " + HeightInches);
HeightInches = parseInt(HeightInches);
let TotalHeight = Height * 12 + HeightInches;
console.log("TotalHeight:" + TotalHeight);
let Meters = TotalHeight * 0.0254;
console.log("Meters:" +  Meters);
let Weight =document.getElementById("weight-in-pounds").value;
console.log("Weight: " + Weight);
let kg = Weight * 0.453592;
console.log("kg:" + kg);
let BMI = kg / (Meters * Meters);
BMI=BMI.toFixed(1);
console.log("BMI:" + BMI);

    let TotalScore = Age + BMIResponse + BloodPressure + FamilyDisease;
   let RiskLevel;
    if (TotalScore <=20) {
        RiskLevel ="Low Risk";
        
    } else if ( TotalScore <=50) {
        RiskLevel ="Moderate Risk";
    } else if ( TotalScore <=75) {
        RiskLevel ="High Risk";
    } else {
        RiskLevel = "Uninsurable";
    }


    document.getElementById("Result").innerHTML="Your Total Score is "+ TotalScore + " <br/> <br/>You are in the "+ RiskLevel + " Category";

    let BMICategory;
    if (BMI >= 18.5 &&  BMI <=24.9) {
        BMICategory ="Normal";
    } else if ( BMI >= 25.0 && BMI <= 29.9) {
       BMICategory ="OverWeight";
    } else if ( BMI >= 30.0 && BMI <= 34.9) {
       BMICategory ="Obesity";
    } 

    document.getElementById("BMIResult").innerHTML="Your BMI  is "+ BMI + " <br/> <br/>You are in the "+ BMICategory + " Category";





}
