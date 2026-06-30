import inquirer from 'inquirer';

interface Calculation {
    num1: number;
    num2: number;
    operation: string;
    result: number;
}

const calculationHistory: Calculation[] = [];

export async function startCalculatorApp() {
    console.log('Welcome to the Enhanced Calculator App!');

    while (true) {
        const { operation } = await inquirer.prompt({
            type: 'list',
            name: 'operation',
            message: 'Choose an operation:',
            choices: [
                'Addition', 'Subtraction', 'Multiplication', 'Division',
                'Exponentiation', 'Square Root', 'View History', 'Exit'
            ]
        });

        if (operation === 'Exit') {
            console.log('Thank you for using the Calculator App. Goodbye!');
            process.exit(0);
        }

        if (operation === 'View History') {
            viewHistory();
            continue;
        }

        const { num1, num2 } = await inquirer.prompt([
            {
                type: 'input',
                name: 'num1',
                message: 'Enter the first number:',
                validate: (input: number) => !isNaN(input) || 'Please enter a valid number.'
            },
            {
                type: 'input',
                name: 'num2',
                message: 'Enter the second number (optional for Square Root and Exponentiation):',
                validate: (input: number) => !isNaN(input) || 'Please enter a valid number.',
                when: (answers: number) => operation !== 'Square Root' && operation !== 'Exponentiation'
            }
        ]);

        const result = performOperation(parseFloat(num1), parseFloat(num2), operation);

        if (!isNaN(result)) {
            const calculation: Calculation = { num1, num2, operation, result };
            calculationHistory.push(calculation);

            console.log(`Result: ${result}\n`);
        } else {
            console.log('Invalid operation or division by zero. Please try again.\n');
        }
    }
}

function viewHistory() {
    console.log('\n--- Calculation History ---');
    calculationHistory.forEach((calculation, index) => {
        console.log(`${index + 1}. ${calculation.num1} ${calculation.operation} ${calculation.num2} = ${calculation.result}`);
    });
    console.log('--------------------------\n');
}

function performOperation(num1: number, num2: number, operation: string): number {
    switch (operation) {
        case 'Addition':
            return num1 + num2;
        case 'Subtraction':
            return num1 - num2;
        case 'Multiplication':
            return num1 * num2;
        case 'Division':
            return num2 !== 0 ? num1 / num2 : NaN;
        case 'Exponentiation':
            return Math.pow(num1, num2);
        case 'Square Root':
            return Math.sqrt(num1);
        default:
            return NaN;
    }
}

// Start the enhanced calculator application
startCalculatorApp();
