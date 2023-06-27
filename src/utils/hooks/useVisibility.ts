import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { selectScannedData } from '../../services/redux/slices/scannedData/scannedData';
import { selectOrder } from '../../services/redux/slices/order/order';
import { Params, useParams } from 'react-router-dom';

interface IVisibilityList {
  isHeaderVisible: boolean;
  navbarVisibility: {
    isNavbarVisible: boolean;
    isBackButtonVisible: boolean;
    isManualInputButtonVisible: boolean;
    isChangeItemsButtonVisible: boolean;
  };
  isLButtonVisible: boolean;
  isRButtonVisible: boolean;
}

const useVisibility = (): IVisibilityList => {
  const currentPath = useLocation().pathname;
  const { packageId }: Readonly<Params<string>> = useParams();
  const { scannedData } = useSelector((state: any) => state.scannedData);
  const order = useSelector(selectOrder);

  // const { packageId }: Readonly<Params<string>> = useParams();
  // const packages = useSelector((state: any) => state.packages.orderPackages.packages);
  const packages = useSelector((state: any) => state.packages.orderPackages.packages);
  const packageIndex = Number(packageId);

  function isRecommendedPackChosen() {
    // const recommendedPacks = packages[packageIndex - 1].recommendedPacks;
    // return recomenndedPacks.includes(scannedData[0]);
    // recommendedPacks.map((pack: string) => scannedData.indexOf(pack));
    if (scannedData.length === 0) {
      return false;
    } else {
      const findPack = packages[packageIndex - 1].recommendedPacks.map((pack: string) =>
        scannedData.indexOf(pack)
      );
      console.log(findPack);
      return findPack.some((el: number) => el >= 0) ? true : false;
    }
  }

  // console.log(
  //   packages[packageIndex].recomenndedPacks.map((pack: string) => scannedData.indexOf(pack))
  // );

  // console.log(
  //   packages[packageIndex - 1].recommendedPacks.map((pack: string) => scannedData.indexOf(pack))
  // );

  let orderBarcodes: string[] = [];

  order.order.items.map(item => {
    return orderBarcodes.push(item.barcode.toString());
  });

  // console.log(scannedData, orderBarcodes);

  function isAllItemsScanned(array1: string[], array2: string[]) {
    function compare(array1: string[], array2: string[]) {
      return array1.map((value: string) => {
        return array2.includes(value);
      });
    }

    if (array2.length < array1.length) {
      return false;
    } else {
      if (compare(array1, array2).includes(false)) {
        return false;
      } else return true;
    }
  }

  // console.log(isAllItemsScanned(orderBarcodes, scannedData));

  const defaultState: IVisibilityList = {
    isHeaderVisible: true,
    navbarVisibility: {
      isNavbarVisible: false,
      isBackButtonVisible: false,
      isManualInputButtonVisible: false,
      isChangeItemsButtonVisible: false,
    },
    isLButtonVisible: false,
    isRButtonVisible: true,
  };

  const [isVisible, setIsVisible] = useState<IVisibilityList>(defaultState);

  useEffect(() => {
    switch (currentPath) {
      case '/storybook':
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: true,
            isBackButtonVisible: true,
            isManualInputButtonVisible: true,
            isChangeItemsButtonVisible: true,
          },
          isLButtonVisible: false,
          isRButtonVisible: false,
        });
        break;
      case '/':
        setIsVisible({
          isHeaderVisible: false,
          navbarVisibility: {
            isNavbarVisible: false,
            isBackButtonVisible: false,
            isManualInputButtonVisible: false,
            isChangeItemsButtonVisible: false,
          },
          isLButtonVisible: false,
          isRButtonVisible: true,
        });
        break;
      case '/order-list':
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: true,
            isBackButtonVisible: false,
            isManualInputButtonVisible: true,
            isChangeItemsButtonVisible: false,
          },
          isLButtonVisible: true,
          isRButtonVisible: isAllItemsScanned(orderBarcodes, scannedData),
        });
        break;
      case `/package-list/${packageId}`:
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: true,
            isBackButtonVisible: true,
            isManualInputButtonVisible: true,
            isChangeItemsButtonVisible: true,
          },
          isLButtonVisible: true,
          isRButtonVisible: isRecommendedPackChosen(),
        });
        break;
      case '/packages-list':
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: false,
            isBackButtonVisible: false,
            isManualInputButtonVisible: false,
            isChangeItemsButtonVisible: false,
          },
          isLButtonVisible: false,
          isRButtonVisible: false,
        });
        break;
      case '/edit-itemslist':
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: true,
            isBackButtonVisible: true,
            isManualInputButtonVisible: false,
            isChangeItemsButtonVisible: false,
          },
          isLButtonVisible: false,
          isRButtonVisible: true,
        });
        break;
      case '/scan-badge':
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: true,
            isBackButtonVisible: false,
            isManualInputButtonVisible: false,
            isChangeItemsButtonVisible: false,
          },
          isLButtonVisible: false,
          isRButtonVisible: false,
        });
        break;
      case '/done':
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: false,
            isBackButtonVisible: false,
            isManualInputButtonVisible: false,
            isChangeItemsButtonVisible: false,
          },
          isLButtonVisible: false,
          isRButtonVisible: true,
        });
        break;
      case '/problem':
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: true,
            isBackButtonVisible: true,
            isManualInputButtonVisible: false,
            isChangeItemsButtonVisible: false,
          },
          isLButtonVisible: false,
          isRButtonVisible: false,
        });
        break;
      case '/broken-items':
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: true,
            isBackButtonVisible: true,
            isManualInputButtonVisible: true,
            isChangeItemsButtonVisible: false,
          },
          isLButtonVisible: false,
          isRButtonVisible: true,
        });
        break;
      case '/container':
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: false,
            isBackButtonVisible: false,
            isManualInputButtonVisible: false,
            isChangeItemsButtonVisible: false,
          },
          isLButtonVisible: false,
          isRButtonVisible: true,
        });
        break;
      case '/keyboard/digits':
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: true,
            isBackButtonVisible: true,
            isManualInputButtonVisible: false,
            isChangeItemsButtonVisible: false,
          },
          isLButtonVisible: false,
          isRButtonVisible: false,
        });
        break;
      case '/keyboard/letters':
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: true,
            isBackButtonVisible: true,
            isManualInputButtonVisible: false,
            isChangeItemsButtonVisible: false,
          },
          isLButtonVisible: false,
          isRButtonVisible: false,
        });
        break;
      default:
        setIsVisible(defaultState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

  return isVisible;
};

export default useVisibility;
