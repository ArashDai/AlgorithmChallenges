//More generally: given two speeds v1 (A speed, integer > 0) and v2 (B speed, integer > 0)
// and a lead g (integer > 0) how long will it take B to catch A?
//The result will be an array [h, mn, s]

function race(v1, v2, g) {
    
    if(v1>v2) return null;
    
    var decrease = v2-v1;
    var hours = g/decrease;
    var finalHours = hours < 1 ? 0 : Math.floor(hours);
    var minutes = hours * 60;
    var finalMinutes = Math.floor(minutes - (finalHours*60));
    var seconds = hours * 3600;
    var finalSeconds = Math.floor(seconds - (finalHours*3600) - (finalMinutes * 60) )
    var solution = [finalHours,finalMinutes,finalSeconds];
    
    return solution;
}