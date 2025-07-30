import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([] as string[]);
  const [errors, setErrors] = useState("" as string | null);

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((res) => {
        const list = res.data.length
          ? res.data.map((item: { name: string }) => item.name)
          : [];
        setUsers(list);
      })
      .catch(() => {
        setErrors("Something went wrong");
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {errors && <p>{errors}</p>}
      <ul>
        {users.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Users;
