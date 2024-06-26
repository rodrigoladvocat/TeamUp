import { useAuth } from '../hooks/AuthUser';
import { Navigate } from 'react-router-dom';

interface Props {
  collaboratorPage: React.ComponentType;
  managerPage: React.ComponentType;
}

export function RedirectByUserType({
  collaboratorPage: CollaboratorPage, 
  managerPage: ManagerPage
}: Props) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to='/login' />;
  }

  return user.isManager ? <ManagerPage/> : <CollaboratorPage/>;
}
