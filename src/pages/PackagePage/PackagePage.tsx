import ItemsList from '../../components/ItemsList/ItemsList';
import './PackagePage.css';
import Tag, { tagTypes } from '../../components/Tag/Tag';
// import { order1AfterML } from '../../utils/utils';
import { packNames } from '../../utils/constants';
import { getTotalItemsQuantity, infoTagDeclension } from '../../utils/utils';
import { useSelector } from 'react-redux';
import { Params, useParams } from 'react-router-dom';
import { selectPackages } from '../../services/redux/slices/packages/packages';
import { selectScannedData } from '../../services/redux/slices/scannedData/scannedData';

export default function PackagePage() {
  const { packageId }: Readonly<Params<string>> = useParams();
  // const packages = useSelector((state: any) => state.packages.orderPackages.packages);
  const packages = useSelector((state: any) => state.packages.orderPackages.packages);
  // const scannedData = useSelector(selectScannedData);
  const packageIndex = Number(packageId);

  console.log(packages);

  // function isRecommendedPackChosen () {
  //   return packages[packageIndex].recommendedPacks.includes(scannedData.scannedData[0])
  // }
  // const id = packages.packageId + 1;

  return (
    <main id='package-list-page' className='package-list-page'>
      <div className='package-list-page__text'>
        <div className='package-list-page__pack-info'>
          <h1 className='package-list-page__title'>Выберите и отсканируйте упаковку</h1>
          <div className='package-list-page__tags-container'>
            {packages[packageIndex - 1].recommendedPacks.map((packName: string) => {
              const getTagType = packNames.box.includes(packName)
                ? tagTypes.box
                : packNames.bag.includes(packName)
                ? tagTypes.bag
                : tagTypes.another;

              return <Tag type={getTagType} key={packName} value={packName} />;
            })}
          </div>
        </div>
        <div className='package-list-page__info'>
          <p className='package-list-page__cell'>Посылка {packageId}</p>
          <ul className='package-list-page__tags'>
            <li>
              <Tag
                type={tagTypes.info}
                value={`${getTotalItemsQuantity(
                  packages[packageIndex - 1].items
                )} ${infoTagDeclension(packages[packageIndex - 1].items.length)}`}
              />
            </li>
            <li>
              <Tag type={tagTypes.info} value={'Почта России'} />
            </li>
          </ul>
        </div>
      </div>
      <ItemsList itemsPackage={packages[packageIndex - 1].items} hasAdditionalTags={false} />
    </main>
  );
}
