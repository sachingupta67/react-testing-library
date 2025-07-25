interface IGreetProps {
  name?: string;
}

const Greet: React.FC<IGreetProps> = (props) => {
  return <div>Hello {props.name}</div>;
};

export default Greet;
