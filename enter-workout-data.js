"use strict";

class Run {
    distance;
    duration;
    averageSpeed;
    experiencePoints;
    constructor(distance = NaN, duration = NaN) {
        this.distance = distance;
        this.duration = duration;
        this.averageSpeed = Math.round(100*this.distance/this.duration)/100;
        this.reCalculateExperiencePoints()
    }

    reCalculateExperiencePoints() {
        this.experiencePoints = Math.round((this.distance*this.distance/this.duration)*100)/100;
    }
}

const runDistanceInput = document.getElementById("run-distance");
const runDurationInput = document.getElementById("run-duration")
const runHistoryView = document.getElementById("previous-runs");

function AddData() {
    event.preventDefault();
    const runData = new Run(runDistanceInput.value, runDurationInput.value);
    runHistoryView.textContent +=
        `${runData.distance}m in 
        ${runData.duration}s at a speed of 
        ${runData.averageSpeed}m/s and was worth
        ${runData.experiencePoints}XP, `
}
