import { useEffect, useState } from "react";
import type { TSkillProps } from "./skills.type";

export const Skills: React.FC<TSkillProps> = (props) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1001);
  }, []);

  return (
    <>
      <ul>
        {skills.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
