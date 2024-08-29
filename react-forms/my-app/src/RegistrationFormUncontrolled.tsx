import { FormEvent } from 'react';

export function UncontrolledForm() {
  let state;
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    state = Object.fromEntries(formData);
    console.log('State:', state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input type="text" name="username" className="username-uncontrolled" />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          className="password-uncontrolled"
        />
      </div>
      <button type="submit" className="button-uncontrolled">
        Submit
      </button>
    </form>
  );
}
