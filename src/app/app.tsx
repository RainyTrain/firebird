import { UserCard } from 'entitites/User/ui/UserCard/UserCard';
import { SearchUser } from 'features/SearchUser/ui/SearchUser';
import { useEffect, useState } from 'react';

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();

      console.log(data);
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="app">
      <SearchUser />

      {/* {users.map((user: any) => {
        return <UserCard user={user} />;
      })} */}
    </div>
  );
};

export default App;
