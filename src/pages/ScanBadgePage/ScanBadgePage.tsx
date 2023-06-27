import ItemsList from '../../components/ItemsList/ItemsList';
// import { order1 } from '../../utils/utils';
import './ScanBadgePage.css';

export default function ScanBadgePage() {
  return (
    <main id='scan-badge-page' className='scan-badge-page'>
      <h1 className='scan-badge-page__title'>
        {/* {`Отсканируйте бейдж бригадира для\u00A0подтверждения отсутствия товар${
          order1.length === 1 ? 'а' : 'ов'
        }`} */}
        Отсканируйте бейдж бригадира для подтверждения
      </h1>
      {/* <ItemsList itemsPackage={order1} />; */}
    </main>
  );
}
