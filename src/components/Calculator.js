import ButtonContainer from "./ButtonContainer";
import Display from "./Display";
import "./Calculator.css";
import { useState } from "react";

const Calculator = () => {
    const options = {
        displayStyle: "display",
        buttons: [
            [
                {
                    type: "operator",
                    val: "C"
                },
                {
                    type: "operand",
                    val: "+/-"
                },
                {
                    type: "operator",
                    val: "%"
                },
                {
                    type: "operator",
                    val: "/"
                }
            ],
            [
                {
                    type: "operand",
                    val: "7"
                },
                {
                    type: "operand",
                    val: "8"
                },
                {
                    type: "operand",
                    val: "9"
                },
                {
                    type: "operator",
                    val: "x"
                }
            ],
            [
                {
                    type: "operand",
                    val: "4"
                },
                {
                    type: "operand",
                    val: "5"
                },
                {
                    type: "operand",
                    val: "6"
                },
                {
                    type: "operator",
                    val: "-"
                }
            ],
            [
                {
                    type: "operator",
                    val: "1"
                },
                {
                    type: "operand",
                    val: "2"
                },
                {
                    type: "operand",
                    val: "3"
                },
                {
                    type: "operator",
                    val: "+"
                }
            ],
            [
                {
                    type: "operator",
                    val: "0",
                    unitWidth: "2"
                },
                {
                    type: "operand",
                    val: ".",
                    unitWidth: "1"
                },
                {
                    type: "operator",
                    val: "="
                }
            ]
        ]
    };

    const [operator, setOperator] = useState('');
    const [operand1, setOperand1] = useState(0);
    const [operand2, setOperand2] = useState(0);
    const [result, setResult] = useState(0);
    const [operationsString, setOperationsString] = useState('');

    const isOperator = (character) => {
        if (character === '+'
            || character === '-'
            || character === 'x'
            || character === '/'
            || character === '%') {
            return true;
        }
        return false;
    }

    const onBtnClickHandler = (event) => {
        event.stopPropagation();
        const buttonValue = event.target.getAttribute("data-value");
        console.log(buttonValue);

        switch (buttonValue) {
            case '+':
            case '-':
            case 'x':
            case '/':
            case '%':
                setOperator(() => buttonValue);
                setOperationsString((prevState) => {
                    if (isOperator(prevState.charAt(prevState.length - 1))) {
                        prevState = prevState.substring(0, prevState.length - 1);
                    }
                    return prevState + buttonValue;
                });
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (operator === '') {
                    setOperand1((prevValue) => Number('' + prevValue + Number(buttonValue)));
                } else {
                    setOperand2((prevValue) => Number('' + prevValue + Number(buttonValue)));
                }
                setOperationsString((prevState) => {
                    return prevState + buttonValue;
                });
                break;

            case '=':
                // perform result
                new Promise((resolve, reject) => {
                    setOperationsString((prevState) => {
                        return prevState + operator;
                    });
                    setResult((prevResult) => {
                        let currResult = 0;
                        switch (operator) {
                            case '+':
                                currResult = operand1 + operand2;
                                break;
                            case '-':
                                currResult = operand1 - operand2;
                                break;
                            case 'x':
                                currResult = operand1 * operand2;
                                break;
                            // handle divide by 0 error
                            case '/':
                                currResult = operand1 / operand2;
                                break;
                            case '%':
                                currResult = operand1 % operand2;
                                break;
                            default:
                                break;
                        }
                        resolve(currResult);
                        return currResult;
                    });
                }).then((response) => {
                    setOperand1((prevValue) => Number(response));
                    setOperand2(0);
                });
                break;

            case 'C':
                setOperand1(0);
                setOperand2(0);
                setOperator('');
                setResult(0);
                setOperationsString('');
                break;

            default:
                break;
        }
    }

    return (
        <div className="calculator">
            <Display
                style={options.displayStyle}
                operationsString={operationsString}
                result={result} />
            <ButtonContainer
                buttons={options.buttons}
                onClickHandler={onBtnClickHandler} />
        </div>
    );
};
export default Calculator;
