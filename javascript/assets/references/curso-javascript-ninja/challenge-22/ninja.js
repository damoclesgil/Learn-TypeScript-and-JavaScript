(function () {
    'use strict';

    function myFunction(a, b, c, d) {
        console.log(this.lastName, a, b, c, d);
    }

    var obj = {
        lastName: 'Goku'
    };

    var obj2 = {
        lastName: 'Vegeta'
    };

    var arr = [1, 2, 3, 4];

    myFunction.call(obj, 1, 2, 3);
    myFunction.call(obj2, ['a', 'b', 'c', {'obj': 'myobj'}]);
})();