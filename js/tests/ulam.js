// $('#collatz-submit').click(function() {
//     run_collatz($('#seed').val());
// });



function main(num) {
	var allNumbers = [];
	var ulamArray = [];
	//building array of all numbers to check
	for(i=num;i<(200*200);i++){
		allNumbers.push(i);
	}
	//checking if every number is prime
	for(i=0;i<allNumbers.length;i++){
		n = allNumbers[i]
		if ( isPrime(n) === true ){
			ulamArray.push(1)
		}
		else{
			ulamArray.push}
		}
	}
}

function isPrime(value) {
	//checking for prime number
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}

function input_check(input1){
	if( isNaN(input1) ){ 
		return false;
	}
	else {
		return Math.floor(input1);
	}
}