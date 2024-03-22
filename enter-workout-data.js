"use strict";

const runDistanceInput = document.getElementById("run-distance");
const runDurationInput = document.getElementById("run-duration")
const runHistoryView = document.getElementById("previous-runs");
const runHistoryData = [];

function AddData() {
    event.preventDefault();
    runHistoryData.push(runDistanceInput.value);
    runHistoryView.textContent +=
        `${runDistanceInput.value}m in 
        ${runDurationInput.value}s at a speed of 
        ${runDistanceInput.value/runDurationInput.value}m/s and was worth
        ${((runDistanceInput.value/runDurationInput.value)*(runDistanceInput.value+runDurationInput.value))/100}XP, ` //This Equation is bad
}
