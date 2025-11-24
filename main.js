'use strict';
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2021,
    isEngineOn: false,

    startEngine: function(){
        this.isEngineOn = true;
        console.log(`Двигатель ${this.brand} ${this.model} запущен.`);
    },

    stopEngine: function () {
        this.isEngineOn = false;
        console.log(`Двигатель ${this.brand} ${this.model} заглушен.`);
    }
};

car.startEngine();
car.stopEngine();