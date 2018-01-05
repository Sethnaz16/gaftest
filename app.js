

// constant variables
const solarCost = 4.25;
const pvDefaultHeight = 3.38;
const pvDefaultWidth = 5.63;

// Main method to analyze
let analyze = () => {
    let homeSqft = document.getElementById("homesqft").value;
    let stories = document.getElementById("stories").value;
    let state = document.getElementById("state").value;

    // Initial calculations
    let roofSqft = getRoofSqFt(homeSqft, stories);
    let roofWidth = getRoofWidth(sqrtRoof);
    let sqrtRoof = getSqrtRoofSqft(roofSqft);
    let roofHeight = getRoofHeight(roofSqft, roofWidth);

    // Configure system
    let roofPlane = {
        width: Math.floor(roofWidth),
        height: Math.floor(roofHeight),
        configType: 'Rectangle'
    }
    let setback = {
        width: getSetback(state),
        height: getSetback(state)
    }
    let pvArray = {
        width: roofPlane.width - setback.width,
        height: roofPlane.height - setback.height,
        columns: Math.floor(getNewPvWidth(roofPlane.width - setback.width)),
        rows: Math.floor(getNewPvHeight(roofPlane.height - setback.height))
    }
    let panels = Math.floor(getNewPvWidth(roofPlane.width - setback.width)) * Math.floor(getNewPvHeight(roofPlane.height - setback.height));
    let systOutput = getPvOutput(state) * panels;
    let systCost = solarCost * systOutput;

    alert(systCost.toLocaleString(undefined, { minimumFractionDigits: 2 }));

}