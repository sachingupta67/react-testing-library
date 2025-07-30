import type { TSkillProps } from "./skills.type";

export const Skills: React.FC<TSkillProps> = (props) => {
  const { skills } = props;

  return (
    <>
      <ul>
        {skills.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
};
