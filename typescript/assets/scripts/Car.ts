class car {
    engine: string;
    constructor(engine: string) {
        this.engine = engine;
    }
    start() {
        alert('Engine Started: ' + this.engine);

    }
    stop() {
        alert('Engine Stopped: ' + this.engine);

    }
}

window.onload = function (){
    var car = new Car('v8');
    car.start();
    car.stop();
}
