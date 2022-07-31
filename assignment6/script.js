console.log("");

const peter = {
    firstName: "Peter",
    lastName: "Smith",
    birthYear: 1990,
    jobTitle: "student",
    score: [100, 99, 90, 96],

    calAvgScore: function () {
        let sum = 0;
        for (let i = 0; i < this.score.length; i++) {
            sum += this.score[i]
        }
        this.avgScore = sum/this.score.length;
        return this.avgScore;
    },

    highestScore: function() {
        let highest = 0;
        for (let i = 0; i < this.score.length; i++) {
            if (this.score[i] > highest) {
                highest = this.score[i];
            }
        }
        return highest;
    },

    showSummary: function () {
        return `${this.firstName} ${this.lastName} has completed ${this.score.length} tasks, and ${this.firstName}'s average score is ${this.calAvgScore()}, ${this.firstName}'s highest score is ${this.highestScore()}.`;
    },
};

console.log(peter.showSummary());

// part 2


console.log("");

function  convertCelsiusToFahrenheit() {
    const userInput = Number(prompt("Please enter a number to be convert into Fahrenheit (-50°C to 50°C)"));
    if (userInput > 58 || userInput < -88) {
        alert("You have entered a number out of range! Retry");
    }
    else if (isNaN(userInput)) {
        alert("You have entered an invalid input! Please enter 'convertCelsiusToFahrenheit()' to retry");
        
        
    }
    else {
        const result = (userInput * (9/5)) +32;
        const resultReport = `${userInput}°C is ${result}°F. `;
        console.log(resultReport);
        return result;
        
    }
    
}

convertCelsiusToFahrenheit();
console.log("")








// modal
var modal = document.getElementById("myModal1");

var btn = document.getElementById("myBtn1");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var modal = document.getElementById("myModal2");
var btn = document.getElementById("myBtn2");
var span = document.getElementsByClassName("close")[1];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



var modal = document.getElementById("myModal3");
var btn = document.getElementById("myBtn3");
var span = document.getElementsByClassName("close")[2];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




////const random = 'Year';

//console.log(peter);
 
////console.log(peter.birthYear);
//console.log(peter['birthYear']);
//console.log(peter['birth${random}']);
//console.log(peter.score);
//console.log(peter.avgScore);


//console.log(peter.calAvgScore());
//console.log(peter.avgScore);


//peter.email = 'peter@yahoo.com'
//console.log(peter);
//peter.email = 'peter@gmail.com'
//console.log(peter);

//const playMusic=()=>console.log('Playing music...')

//entry controlled loop



///const score = [100, 99, 90, 96];

//Let finalScore = 0;

//for (Let i = 0; i < score.length; i++ ) {

  //  finalScore += score[i]


   // console.log(finalScore);



//}
//console.log(finalScore / score.length)


//Let i; 
///for (i in score) { 
///console.log(i, score[i]);
///}

///Let finalScoreNew = 0;
///for (Let i = 0; i < score.length; i++) { 
////   finalScoreNew += score[i];
 ///   if (finalScoreNew >= 200){
  //      //break;
  //  continue;
  ///  }

   /// console.log(finalScoreNew);
    
////}


////Let balance=101;
///while (balance>6) {

   // console.log('ordering a coffee..');

  ///  balance -=6;
////}

// exit controlled loop
///Let xyz = 100;
//Let rep = 0;
////do {
  ///  console.log('Playing music..');
 //   rep++;
 //   xyz -= 10;
   //// console.log('You have order ${rep} times and balance is ${xyz}')
////}



///while(xyz > 0)






//const bills=[30, 12, 50, 100, 24, 60];
//const tips=[];
//const total=[];

//bills.push(120);
//bills.push(88);

//function calTipAndTotal(bill) {
  //if (bill <= 30) {
     // tip.push(bill * 0.1)
    //  /Total.push(bill + bill * .1);

  //}
  //else if (bill > 30 && bill < 150) {
    //  tip.push(bill * .15)
      //Total.push(bill + bill * .1);

  //}

  //else {
    ///  tip.push(bill * .18)
      //Total.push(bill + bill * .1);

  //}


  //console.log(tip);
  //console.log(Total);

//}




//for(repNew in bills) { calTipAndTotal(bills[repNew])}



//console.log(tip);
//console.log(Total);

//function calOneTipAndTotal(val) {
//if (val <= 30) {
//tip.push(val * .1)
//total.push(val + bill * .1);

//}
//else if (bill > 30 && bill < 150) {
  //tip.push(bill * .15)
  //total.push(bill + bill * .1);
//}

//else {
  //tip.push(bill * .18)
  //total.push(bill + bill * .1);
  //}


//}


//function calTipAndTotalPro(num) {
  //const bills=[];
  //const tips=[];
  //const totalBills=[];

 // for (Let i = 0; i < num; i++) {
   //   bills.push(Number(prompt(`Enter your bill for #${i + 1}`)))
      
  //}




  //for (Let i = 0; i < bills.length; i++) {

    //  if (bills[i] < 30) {
      //tips.push(bills[i] * .15)
  //}
    //  else {
      //    tips.push(bills[i] * .25)
      //}
          
//}

  //for(Let i=0; i < tips.length;i++) {
    //  totalBills.push(tips[i] + bills[i])
  //}

  //return `your bills:${bills}, your tips: ${tips}, your total bills: ${totalBills}`
//}








