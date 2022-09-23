import "./Button.css";

const Button = (props) => {
    const { button, width } = props;

    return <button
        className={`button ${width}`}
        data-value={button.val}>{button.val}
    </button>;
};
export default Button;
