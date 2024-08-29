import { FormEvent, useState } from 'react';

export type User = {
  username?: string;
  password?: string;
};

type UserProps = {
  user?: User;
  onSubmit: (user: User) => void;
};

export function UserForm({ user, onSubmit }: UserProps) {
  const [username, setUsername] = useState(user?.username ?? '');
  const [password, setPassword] = useState(user?.password ?? '');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData: User = { username, password };
    onSubmit(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit">{user ? 'Update User' : 'Create User'}</button>
        </div>
      </form>
    </>
  );
}
