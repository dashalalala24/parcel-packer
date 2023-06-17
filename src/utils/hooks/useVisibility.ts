import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

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
  const defaultState: IVisibilityList = {
    isHeaderVisible: false,
    navbarVisibility: {
      isNavbarVisible: false,
      isBackButtonVisible: true,
      isManualInputButtonVisible: true,
      isChangeItemsButtonVisible: true,
    },
    isLButtonVisible: false,
    isRButtonVisible: false,
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
          isRButtonVisible: true,
        });
        break;
      case '/packageID-package-list':
        setIsVisible({
          isHeaderVisible: true,
          navbarVisibility: {
            isNavbarVisible: true,
            isBackButtonVisible: true,
            isManualInputButtonVisible: true,
            isChangeItemsButtonVisible: true,
          },
          isLButtonVisible: true,
          isRButtonVisible: true,
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
