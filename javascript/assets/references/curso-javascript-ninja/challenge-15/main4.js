(function () {
    var obj = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33',

                }
            }
        }
    };
    // console.log(obj.prop1.pro2.prop3);
    with(obj.prop1.prop2.prop3) {
        console.log(prop31, prop32, prop33);
    }
})();