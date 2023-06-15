import { useEffect, useMemo, useState } from 'react';
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

  const defaultState: IVisibilityList = useMemo(() => {
    return {
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
  }, []);

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
      case '/start':
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
      case '/package-list':
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
      default:
        setIsVisible(defaultState);
    }
  }, [currentPath, defaultState]);

  return isVisible;
};

export default useVisibility;
