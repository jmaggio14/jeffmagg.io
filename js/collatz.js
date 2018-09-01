//listening
$('#collatz-submit').click(function() {
    run_collatz($('#seed').val());
});

//want to feed a user input here
def numberToBase(n, b):
    if n == 0:
        return [0]
    digits = []
    while n:
        digits.append(int(n % b))
        n /= b
    return digits[::-1]