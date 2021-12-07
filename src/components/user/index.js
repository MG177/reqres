import * as React from "react";
export default function Users() {
    const [users, setUsers] = React.useState([]);
    const f = async () => {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      setUsers(json.data);
    };
    React.useEffect(() => {
      f();
    }, []);
    return (
        <div className="flex">
          {users.length &&
            users.map((user) => {
              return (
                <div key={user.id} className="users">
                  <p>
                    <strong>{user.first_name}</strong>
                  </p>
                  <p>{user.email}</p>
                  <img key={user.avatar} src={user.avatar} />
                </div>
              );
            })}
        </div>
    );
  }