// Helper functions
let getRoundedNum = (num, digit) => {
    let s = 1 + "";
    let i = 0;
    while(i < digit){
        s = s + "0";
        i++;
    }
    let decimal = parseInt(s);
    return Math.round(num * decimal)/decimal;
}
let getRoofSqFt = (homeSqft, stories) => { return getRoundedNum((homeSqft/stories * 1.0541)/2, 4);}
let getSqrtRoofSqft = (roofSqft) => { return getRoundedNum(Math.sqrt(roofSqft), 8);}
let getRoofWidth = (sqrtRoof) => { return getRoundedNum(sqrtRoof * 1.618, 8);}
let getRoofHeight = (roofSqft, roofWidth) => { return getRoundedNum(roofSqft/roofWidth, 8);}
let getSetback = (state) => { return state == 'CA' ? 3 : 1;} // return 3 if CA

// New Pv dimensions
let getNewPvWidth = (pvWidth) => { return (pvWidth - 0.5) / 5.63;}
let getNewPvHeight = (pvHeight) => { return (pvHeight - 2.2708) / 3.38;}