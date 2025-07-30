import type { ICounterTwoProps } from "./couter-two.type";

const CounterTwo:React.FC<ICounterTwoProps> = (props) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{props.count}</p>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>Increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>Decrement</button>
      )}
    </div>
  );
};

export default CounterTwo