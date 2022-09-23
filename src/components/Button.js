import "./Button.css";

const Button = (props) => {
    const { button, width } = props;

    return <button className={`button ${width}`}>{button.val}</button>;
};
export default Button;
