import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css';
import Icon from '../Icon/Icon';
import IconImages from '../Icon/types';

const Header: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return currentPath === '/start' ? null : (
    <header className='header'>
      <div className='header__burger-nav'>
        <Icon imgName={IconImages.burger} width={72} />
        <div className='header__logo'>
          <Icon imgName={IconImages.yaLogo} width={92} height={44} />
          <Icon imgName={IconImages.yaLogoname} width={93} height={46} />
        </div>
      </div>
      <p className='header__name'>Упаковка</p>
      <div className='header__kebab-nav'>
        <div className='header__userbar'>
          <p className='header__username'>sof-natgemokee</p>
          <div className='header__efficiency'>
            <Icon imgName={IconImages.rocket} width={32} color='white' />
            <p className='header__efficiency-percentage'>71%</p>
          </div>
        </div>
        <Icon imgName={IconImages.kebab} width={72} />
      </div>
    </header>
  );
};

export default Header;
