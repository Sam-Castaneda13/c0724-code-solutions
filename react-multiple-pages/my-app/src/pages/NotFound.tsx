import { useNavigate } from 'react-router-dom';

export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex">
      <div className="flex-1 py-12 text-center">
        <h3>Uh oh, we could not find the page you were looking for!</h3>
        <div
          onClick={() => navigate('/')}
          className="text-gray-700 cursor-pointer">
          Return to the Dashboard
        </div>
      </div>
    </div>
  );
}
