import { RootState, useAppSelector } from '../../redux';

function Dashboard(): JSX.Element {
  const email = useAppSelector((state: RootState) => state.auth.email);

  return <h1>Dashboard {email}</h1>;
}

export default Dashboard;
