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
      case '/start':
        setButtonsState({
          RButtonState: {
            text: 'Начать',
            isQR: false,
            callback: () => {
              navigate('/package-list');
            },
          },
        });
        break;
      case '/package-list':
        setButtonsState({
          RButtonState: {
            text: 'Готово',
            isQR: true,
          },
          LButtonState: {
            callback: () => {
              alert('Решай её сам! :)');
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
