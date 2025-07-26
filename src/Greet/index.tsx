import type { IGreetProps } from "./interface.type";


const Greet: React.FC<IGreetProps> = (props) => {
  return <div>Hello {props.name}</div>;
};

export default Greet;
