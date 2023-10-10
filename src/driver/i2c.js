const fs = require('fs');
const i2c = require('i2c-bus');

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
        if (fs.existsSync(this.pinPath)) {
            fs.writeFileSync('/sys/class/gpio/unexport', this.pinNumber);
        }
    }

    setMode(mode) {
        this.exportPin();

        fs.writeFileSync(`${this.pinPath}/direction`, mode);
        //set active_low to 1 to invert the output
        fs.writeFileSync(`${this.pinPath}/active_low`, '0');
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

class PCF8575 {
    constructor(address, busNumber) {
        this.address = address;
        this.busNumber = busNumber;
        this.i2c1 = i2c.openSync(this.busNumber);
    }

    setOutputState(pin, state) {
        const value = state ? 1 : 0;
        this.i2c1.writeByteSync(this.address, pin, value);
    }

    close() {
        this.i2c1.closeSync();
    }
}

// Constants
const pcfAddress = 0x20; // Change this to your PCF8575 address
const pcfBusNumber = 1;  // Change this to your I2C bus number
const delayBetweenPins = 500;

// Create instances of BeagleBoneGPIO for each pin
const gpioPins = [67, 68, 44, 26, 46, 65, 47, 27].map(pinNumber => {
    const gpioPin = new BeagleBoneGPIO(pinNumber);
    gpioPin.setState('out');
    return gpioPin;
});

// Create an instance of PCF8575
const pcf = new PCF8575(pcfAddress, pcfBusNumber);

// Function to set the output state for all pins
function setAllOutputStates(state, delay) {
    for (let pinNumber = 0; pinNumber < 8; pinNumber++) {
        setTimeout(() => {
            pcf.setOutputState(pinNumber, state);
        }, pinNumber * delay);
    }
}

// Delay 2 seconds
setTimeout(() => {
    setAllOutputStates(true, delayBetweenPins);
}, 0);

// Delay 1 second
setTimeout(() => {
    setAllOutputStates(false, delayBetweenPins);
}, 2000);

// Function to handle cleanup
function cleanup() {
    pcf.close();
    gpioPins.forEach(gpioPin => {
        gpioPin.setOutputState('low'); // Set output to low before exiting
        gpioPin.unexportPin();
    });
    process.exit();
}

process.on('SIGINT', cleanup);
