import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import css from './AppBar.module.css';

// import { Navigation } from '../Navigation/Navigation';
// import { AuthMenu } from 'components/AuthMenu/AuthMenu';
// import { UserMenu } from 'components/UserMenu/UserMenu';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from 'redux/user/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

   return (
<header className={css.header}>
           <Navigation />
           {isLoggedIn ? <UserMenu /> : <AuthNav />}
           </header>
)
}


