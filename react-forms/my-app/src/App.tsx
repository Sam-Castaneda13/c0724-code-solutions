import './App.css';
import { ControlledForm } from './RegistrationFormControlled';
import { UncontrolledForm } from './RegistrationFormUncontrolled';
import { UserForm, User } from './UserForm';

const handleCreateUser = (user: User) => {
  console.log('User created:', user);
};

const handleEditUser = (user: User) => {
  console.log('User edited:', user);
};

const existingUser: User = {
  username: 'johndoe',
  password: 'password123',
};

function App() {
  return (
    <>
      <div>
        <h1>Uncontrolled</h1>
        <UncontrolledForm />
      </div>
      <div>
        <h1>Controlled</h1>
        <ControlledForm />
      </div>
      <div>
        <h1>Create User:</h1>
        <UserForm onSubmit={handleCreateUser} />
      </div>
      <div>
        <h1>Edit User:</h1>
        <UserForm user={existingUser} onSubmit={handleEditUser} />
      </div>
    </>
  );
}

export default App;
