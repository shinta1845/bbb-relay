const fs = require('fs');
active_low = false;

class BeagleBoneGPIO {
    constructor(pinNumber) {
        this.pinNumber = pinNumber;
        this.pinPath = `/sys/class/gpio/gpio${pinNumber}`;
    }

    exportPin() {
        if (!fs.existsSync(this.pinPath)) {
            fs.writeFileSync('/sys/class/gpio/export', this.pinNumber);
        }
    }

    unexportPin() {
        ls
        if (fs.existsSync(this.pinPath)) {
            fs.writeFileSync('/sys/class/gpio/unexport', this.pinNumber);
        }
    }

    setMode(mode) {
        this.exportPin();

        fs.writeFileSync(`${this.pinPath}/direction`, mode);
        //set active_low to 1 to invert the output
        fs.writeFileSync(`${this.pinPath}/active_low`, active_low ? '0' : '1');
        fs.writeFileSync(`${this.pinPath}/value`, '1');
    }

    setState(state) {
        if (state !== 'in' && state !== 'out') {
            throw new Error('Invalid state. Use "in" or "out".');
        }
        this.setMode(state);
    }

    setOutputState(state) {
        if (state !== 'low' && state !== 'high') {
            throw new Error('Invalid output state. Use "low" or "high".');
        }
        fs.writeFileSync(`${this.pinPath}/value`, state === 'high' ? '1' : '0');
    }
}

// Constants
//const pinNumbers = [67, 68, 44, 26, 46, 65, 47, 27];30 60 31 50 48 51 5 4
//67 68 44 26 66 69 45 23 60 50 51 4 30 31 48 5
const pinNumbers = [67, 68, 44, 26, 66, 69, 45, 23, 60, 50, 51, 4, 30, 31, 48, 5];
const delayBetweenPins = 100;

// Create instances of BeagleBoneGPIO for each pin
const gpioPins = pinNumbers.map(pinNumber => {
    const gpioPin = new BeagleBoneGPIO(pinNumber);
    gpioPin.setState('out');
    return gpioPin;
});

// Function to set the output state for all pins
function setAllOutputStates(state, delay) {
    gpioPins.forEach((gpioPin, index) => {
        setTimeout(() => {
            gpioPin.setOutputState(state);
        }, index * delay);
    });
}


// Delay 2 seconds
setTimeout(() => {
    setAllOutputStates('high', delayBetweenPins);
}, 1500);

// Delay 1 second
setTimeout(() => {
    setAllOutputStates('low', delayBetweenPins);
}, 1000);

//Function to handle cleanup
function cleanup() {
    gpioPins.forEach(gpioPin => {
        gpioPin.setOutputState('low'); // Set output to low before exiting
        gpioPin.unexportPin();
    });
    process.exit();
}

process.on('SIGINT', cleanup);
