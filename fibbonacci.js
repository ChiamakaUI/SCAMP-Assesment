function fibonacci(num) {
    var x = num, x1 = 0, x2 = 1;

    for(var y = 0; 0 <= x; ++x){
        console.log(`${x2}`)
        var sum = x1 + x2;
            x1 = x2;
            x2 = sum;
    }
}
