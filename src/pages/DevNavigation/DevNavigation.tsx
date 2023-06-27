import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import './DevNavigation.css';
import { Link } from 'react-router-dom';

const DevNavigation: FC = () => {
  const location = useLocation();
  return (
    <div
      style={{
        padding: '13vh 0',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Link style={{ font: 'var(--font-m)' }} to={'/storybook'}>
        storybook
      </Link>
      <Link
        style={{ font: 'var(--font-m)' }}
        to={'/modal'}
        state={{ backgroundLocation: location }}
      >
        modal
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/start'}>
        start
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/order-list'}>
        order list
      </Link>
      <br />{' '}
      <Link style={{ font: 'var(--font-m)' }} to={'/packages-list'}>
        packages list
      </Link>
      <br />{' '}
      <Link style={{ font: 'var(--font-m)' }} to={'/ackage-list/:packageId'}>
        package list
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/edit-itemslist'}>
        edit itemlist
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/done'}>
        succes page
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/problem'}>
        problem page
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/letters-popup'}>
        letters-popup
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/numbers-popup'}>
        numbers-popup
      </Link>
      <br />
      <Link style={{ font: 'var(--font-m)' }} to={'/13423'}>
        nomatch
      </Link>
    </div>
  );
};

export default DevNavigation;
