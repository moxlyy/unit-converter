const readline = require('readline');
const conversions = require('./src/conversions');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the Unit Converter CLI!");

rl.question("Enter the value to convert: ", (value) => {
    rl.question("Select the source unit: ", (sourceUnit) => {
        rl.question("Select the target unit: ", (targetUnit) => {
            const result = conversions.convert(value, sourceUnit, targetUnit);
            console.log(`Result: ${result}`);
            rl.close();
        });
    });
});