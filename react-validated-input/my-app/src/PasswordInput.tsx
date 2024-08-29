import { useState } from 'react';

const test = ['A password is required', 'Your password is too short', ''];

export function ValidatedInput() {
  const [password, setPassword] = useState('');
  let passwordCheck;
  let checker = 'Not Allowed';
  let checkerClass = 'not-allowed';
  if (password.length === 0) {
    passwordCheck = test[0];
  }
  if (password.length > 0 && password.length < 8) {
    passwordCheck = test[1];
  }
  if (password.length > 7) {
    passwordCheck = test[2];
    checker = 'Allowed';
    checkerClass = 'allowed';
  }

  return (
    <>
      <div>
        <label className="label">Password</label>
        <div>
          <input
            className="password-box"
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className={checkerClass}>{checker}</span>
        </div>
        <div className="password-check">{passwordCheck}</div>
      </div>
    </>
  );
}
