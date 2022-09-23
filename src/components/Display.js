// width
// height
import "./Display.css";

const Display = (props) => {
    const { style, result, operationsString } = props;
    return <>
        <div>{operationsString}</div>
        <div className={style}>{result}</div>
    </>;
};
export default Display;
