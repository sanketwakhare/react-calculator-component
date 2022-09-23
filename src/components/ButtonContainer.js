import ButtonRow from "./ButtonRow";
import "./ButtonContainer.css";

const ButtonContainer = (props) => {
    const { buttons } = props;

    return (
        <div className="buttonContainer">
            {buttons.map((buttonRow, index) => {
                return <ButtonRow key={`button-row-${index}`} buttonRow={buttonRow} />;
            })}
        </div>
    );
};
export default ButtonContainer;
