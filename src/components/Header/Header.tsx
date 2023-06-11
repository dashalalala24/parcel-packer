import { FC } from 'react';
import './Header.css';
import Icon from '../Icon/Icon';

const Header: FC = () => {
  return (
    <header className='header'>
      <div className='header__burger-nav'>
        <Icon
          imgName={'burger'}
          width={72}
        />
        <div className='header__logo'>
          <Icon
            imgName={'yaLogo'}
            width={92}
            height={44}
          />
          <Icon
            imgName={'yaLogoname'}
            width={93}
            height={46}
          />
        </div>
      </div>
      <p className='header__name'>Упаковка</p>
      <div className='header__kebab-nav'>
        <div className='header__userbar'>
          <p className='header__username'>sof-natgemokee</p>
          <div className='header__efficiency'>
            <Icon
              imgName={'rocket'}
              width={32}
            />
            <p className='header__efficiency-percentage'>71%</p>
          </div>
        </div>
        <Icon
          imgName={'kebab'}
          width={72}
        />
      </div>
    </header>
  );
};

export default Header;
