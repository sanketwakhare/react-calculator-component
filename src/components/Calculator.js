import ButtonContainer from "./ButtonContainer";
import Display from "./Display";
import "./Calculator.css";

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
    return (
        <div className="calculator">
            <Display style={options.displayStyle} />
            <ButtonContainer buttons={options.buttons} />
        </div>
    );
};
export default Calculator;
