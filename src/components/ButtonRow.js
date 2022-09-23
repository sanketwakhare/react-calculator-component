import Button from "./Button";
import "./ButtonRow.css";

const ButtonRow = (props) => {
    const { buttonRow } = props;
    const buttonCount = buttonRow.length;
    return (
        <div className="buttonRow">
            {buttonRow.map((button, index) => {
                if (buttonCount === 3 && index === 0) {
                    return (
                        <Button
                            key={`button-id-${index}`}
                            button={button}
                            width={"btn-width__50"}
                        />
                    );
                }
                return <Button key={index} button={button} width={"btn-width__25"} />;
            })}
        </div>
    );
};
export default ButtonRow;
