//listening
$('#collatz-submit').click(function() {
    run_collatz($('#seed').val());
});

//want to feed a user input here
function run_collatz(seed,min=1,max=1e80) {
	var correctedSeed = correct_seed(seed);
	if (correctedSeed === false){ //checking to see if seed is indeed a number
		alert("seed must be valid number");
	}
	else{
		var withinBounds = check_bounds(correctedSeed,min,max);
		if ( withinBounds ){
		    var collatzArray = collatz_array(correctedSeed);
		    display(correctedSeed,collatzArray);
		}
	}
}

//generates the actual collatz array
function collatz_array(seed) {
    var n = seed; // integer check
    var nArray = [];
    while (n !== 1) {
        if ((n % 2) === 0) { //n is even
            n = n / 2;
        } else {
            n = 3 * n + 1; // n is odd
        }
        nArray.push(n);
    }
    return nArray
}

//display output here -- for now printing, eventually graphing
function display(seed,collatzArray) {
	var output = [];
	var displaySeed = "seed = " + seed.toString();
	for (var i = 0; i <= collatzArray.length - 1; i++) {
		output.push(" " + collatzArray[i].toString() );
	}
	$('#collatz-seed').text(displaySeed);
    $('#output').text(output);
}

function check_bounds(seed,min,max) {

	//checking bounds
	var withinBounds = true;
	if (seed > max){
		$('#collatz-seed').text("Seed is too large, must be less than or equal to " + max.toString());
	    $('#output').text("");
		withinBounds = false;
	}
	if (seed <= min){
		$('#collatz-seed').text("Seed is too small, must be greater than " + min.toString() );
	    $('#output').text("");
		withinBounds = false;
	}
	return withinBounds
} 

function correct_seed(seed){
	//making sure input is integer
	if (isNaN(seed)){ // if seed isn't number, then return false
		return false
	}
	else{
		return Math.floor(seed) //if seed is number, then force integer and return
	}
}