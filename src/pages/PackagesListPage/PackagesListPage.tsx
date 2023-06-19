import { Link } from 'react-router-dom';
import PackageCard from '../../components/PackageCard/PackageCard';
import { IItem, order1AfterML } from '../../utils/orderExamples';

import './PackagesListPage.css';

export default function PackagesListPage() {
  return (
    <main id='packages-list-page' className='packages-list-page'>
      <h1 className='packages-list-page__title'>Выберете посылку для упаковки</h1>
      <div className='packages-list-page__list'>
        {order1AfterML.packages.map((packagesItem: { [x: string]: any; items: IItem[] }) => {
          return (
            <div className='packages-list-page__package-container'>
              <p className='packages-list-page__package-title'>
                {`Посылка 
                ${packagesItem.packageId}`}
              </p>
              <Link className='packages-list-page__package' to='/packageID-package-list'>
                <PackageCard key={order1AfterML.orderId} items={packagesItem.items} />
              </Link>
            </div>
          );
        })}
        {/* расскоментировать для проверки длинного списка */}
        {/* {order1AfterML.packages.map((packagesItem: { [x: string]: any; items: IItem[] }) => {
          return (
            <div className='packages-list-page__package-container'>
              <p className='packages-list-page__package-title'>
                {`Посылка 
                ${packagesItem.packageId}`}
              </p>
              <Link className='packages-list-page__package' to='/'>
                <PackageCard key={order1AfterML.orderId} items={packagesItem.items} />
              </Link>
            </div>
          );
        })} */}
      </div>
    </main>
  );
}
