import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, MouseEventHandler } from 'react';

interface IButtonState {
  LButtonState?: {
    callback?: MouseEventHandler<HTMLButtonElement>;
  };

  RButtonState?: {
    text: 'Начать' | 'Назад' | 'Готово' | 'Выбрать';
    isQR: boolean;
    callback?: MouseEventHandler<HTMLButtonElement>;
  };
}

const useButtonsState = (): IButtonState => {
  const currentPath = useLocation().pathname;
  const [buttonsState, setButtonsState] = useState<IButtonState>({});
  const navigate = useNavigate();

  useEffect(() => {
    switch (currentPath) {
      case '/':
        setButtonsState({
          RButtonState: {
            text: 'Начать',
            isQR: false,
            callback: () => {
              navigate('/order-list');
            },
          },
        });
        break;
      case '/order-list':
        setButtonsState({
          RButtonState: {
            text: 'Готово',
            isQR: true,
            callback: () => {
              navigate('/packages-list');
            },
          },
          LButtonState: {
            callback: () => {
              navigate('/problem');
            },
          },
        });
        break;
      case '/packageID-package-list':
        setButtonsState({
          RButtonState: {
            text: 'Готово',
            isQR: true,
            callback: () => {
              navigate('/done');
            },
          },
          LButtonState: {
            callback: () => {
              navigate('/problem');
            },
          },
        });
        break;
      case '/edit-itemslist':
        setButtonsState({
          RButtonState: {
            text: 'Выбрать',
            isQR: false,
            callback: () => {
              navigate('/packageID-package-list');
            },
          },
          LButtonState: {
            callback: () => {
              navigate('/problem');
            },
          },
        });
        break;
      case '/done':
        setButtonsState({
          RButtonState: {
            text: 'Готово',
            isQR: true,
            callback: () => {
              navigate('/');
            },
          },
        });
        break;
      default:
        setButtonsState({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

  return buttonsState;
};

export default useButtonsState;
