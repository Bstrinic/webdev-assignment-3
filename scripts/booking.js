/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

var costPerDay = 35;
var totalCost = 0;
var numberOfDays = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

const dayButtons$ = document.querySelectorAll(".day-selector li");

//  Responsible for calculating the total number of days selected + css

dayButtons$.forEach((dayButton) => {
    dayButton.addEventListener("click", () => {
        //if the class list is already present => subtract value from totalCost
        if (dayButton,classList.contains("clicked")) {
            numberOfDays -= 1;
        }   else {
            numberOfDays += 1;
        }

    //  Toggle css after the calculation is complete 
    dayButton.classList.toggle("clicked");
    recalculateCost();
    }); 
});



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

document.getElementById("clear-button").addEventListener("click", () => {
    dayButtons$.forEach(function (dayButton) {
        dayButton,classList.remove("clicked");
    });
    numberOfDays = 0;

    recalculateCost();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

const halfDayButton = document.getElementById("half");
const fullDayButton = document.getElementById("full");

halfDayButton.addEventListener("click", () => {
    costPerDay = 20;

    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");

    recalculateCost
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener("click", () => {
    costPerDay = 35;

    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");

    recalculateCost();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

const calculatedOutput$ = document.getElementById("calculated-cost");

//  Single Responsibility Principle => We need a class to recalculate the total cost 

function recalculateCost() {
    totalCost = costPerDay * numberOfDays;
    console.log(costPerDay);
    console.log(numberOfDays);
    console.log(totalCost);
    calculatedOutput$.innerHTML = totalCost
}
