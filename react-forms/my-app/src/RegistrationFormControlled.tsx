import { ChangeEvent, useState } from 'react';

export function ControlledForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  let state;
  const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = () => {
    state = { username, password };
    console.log('State:', state);
  };

  return (
    <>
      <label>Username:</label>
      <input type="text" value={username} onChange={handleChangeUsername} />
      <label>Password:</label>
      <input type="password" value={password} onChange={handleChangePassword} />
      <div>
        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </>
  );
}
