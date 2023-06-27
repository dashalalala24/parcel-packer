import { Link } from 'react-router-dom';
import PackageCard from '../../components/PackageCard/PackageCard';
import { IItemOfOrder, IItemOfPackage, IOrderPackages, IPackage } from '../../utils/utils';

import './PackagesListPage.css';
import { useSelector } from 'react-redux';
import { selectPackages } from '../../services/redux/slices/packages/packages';
import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks/redux';
import { resetScannedData } from '../../services/redux/slices/scannedData/scannedData';

export default function PackagesListPage() {
  const orderPackages = useSelector((state: any) => state.packages.orderPackages.packages);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetScannedData());
  }, [dispatch]);

  return (
    <main id='packages-list-page' className='packages-list-page'>
      <h1 className='packages-list-page__title'>Выберете посылку для упаковки</h1>
      <div className='packages-list-page__list'>
        {orderPackages.map((packagesItem: IPackage) => {
          return (
            <div key={orderPackages.packageId} className='packages-list-page__package-container'>
              <p className='packages-list-page__package-title'>
                {`Посылка 
                ${packagesItem.packageId}`}
              </p>
              <Link
                className='packages-list-page__package'
                to={`/package-list/${packagesItem.packageId}`}
              >
                <PackageCard key={packagesItem.packageId} items={packagesItem.items} />
              </Link>
            </div>
          );
        })}
        {/* расскоментировать для проверки длинного списка */}
        {/* {order1AfterML.packages.map((packagesItem: { [x: string]: any; items: IItemOfOrder[] }) => {
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
