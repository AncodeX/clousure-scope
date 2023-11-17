function sumWithClousure(a = 0) {
    let sum = 0;
    function addNumberSum(b = 0) {
        sum = a + b;
        console.log(sum);
    }
    return addNumberSum;
}

sumWithClousure()();
sumWithClousure(2)(5);
sumWithClousure(90)();
sumWithClousure()(10);