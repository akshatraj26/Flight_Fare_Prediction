function validateForm() {
    var depTime = new Date(document.getElementById('Dep_Time').value);
    var arrTime = new Date(document.getElementById('Arrival_Time').value);
    var source = document.getElementById('Source').value;
    var destination = document.getElementById('Destination').value;
    var today = new Date();
    today.setHours(0, 0 ,0, 0); // Set the time to the beginning of today

    
    // Check if the departure date is in the past
    if (depTime < today){
        alert("Departure date cannot be in the past.");
        return false;
    }

    // Check if the arrival date is not later than the departure date
    if (arrTime <= depTime) {
        alert("Arrival date must be later than the departure date.");
        return false;
    }
    
    
    // Check if the source and destination are the same
    if (source == destination) {
        alert("Source and destination must be different.");
        return false
    }
    return true;
}

