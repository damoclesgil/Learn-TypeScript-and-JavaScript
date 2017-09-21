(function () {
    function myFunction() {
        return this;
    }
    console.log('myFunction: ', myFunction(), myFunction() === window);

    var myObject = {
        myProperty: 1,
        init: function init() {
            return this;
        }
    };
    console.log('myObject', myObject.init(), myObject.init() === myObject);

    function MyConstructor() { // Construtor 1 letra maiuscula por convensão
        this.prop1 = 'prop1',
        this.prop2 = 'prop2'
        return 'qualquer coisa'
    }
    let construtor = new MyConstructor();
    console.log('MyConstructor', MyConstructor());

    console.log(prop1);
    // console.log();
    // console.log();

})();