import ButtonRow from "./ButtonRow";
import "./ButtonContainer.css";

const ButtonContainer = (props) => {
    const { buttons, onClickHandler } = props;


    return (
        <div className="buttonContainer" onClick={onClickHandler}>
            {buttons.map((buttonRow, index) => {
                return <ButtonRow key={`button-row-${index}`} buttonRow={buttonRow} />;
            })}
        </div>
    );
};
export default ButtonContainer;
