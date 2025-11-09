import { useContext } from 'react';
import UserContext from './UserContext';

export default function UserDetails() {
  const userData = useContext(UserContext);
  if (!userData) return <p>No user data</p>;
  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}
