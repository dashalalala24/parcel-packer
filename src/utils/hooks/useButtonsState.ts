import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, MouseEventHandler } from 'react';
import { setInfo } from '../../services/redux/slices/notification/notification';
import { useAppDispatch } from './redux';

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
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentPath = useLocation().pathname;
  const [buttonsState, setButtonsState] = useState<IButtonState>({});

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
              navigate('/scan-badge');
              dispatch(
                setInfo({
                  message: 'Бригадир скоро подойдет',
                })
              );
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
      case '/broken-items':
        setButtonsState({
          RButtonState: {
            text: 'Готово',
            isQR: true,
            callback: () => {
              navigate('/container');
            },
          },
        });
        break;
      case '/container':
        setButtonsState({
          RButtonState: {
            text: 'Готово',
            isQR: true,
            callback: () => {
              navigate('/packages-list');
            },
          },
        });
        break;
      default:
        setButtonsState({
          RButtonState: {
            text: 'Назад',
            isQR: false,
            callback: () => {
              navigate(-1);
            },
          },
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPath]);

  return buttonsState;
};

export default useButtonsState;
