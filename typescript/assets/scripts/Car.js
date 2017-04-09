var car = (function () {
    function car(engine) {
        this.engine = engine;
    }
    car.prototype.start = function () {
        alert('Engine Started: ' + this.engine);
    };
    car.prototype.stop = function () {
        alert('Engine Stopped: ' + this.engine);
    };
    return car;
}());
window.onload = function () {
    var car = new Car('v8');
    car.start();
    car.stop();
};
