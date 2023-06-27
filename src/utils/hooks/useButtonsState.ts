import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState, MouseEventHandler } from 'react';
import { setInfo, setSystemError } from '../../services/redux/slices/notification/notification';
import { useAppDispatch } from './redux';
import { getInitialOrder, resetOrder, selectOrder } from '../../services/redux/slices/order/order';
import { resetScannedData } from '../../services/redux/slices/scannedData/scannedData';
import { getInitialPackages, resetPackages } from '../../services/redux/slices/packages/packages';
import { useSelector } from 'react-redux';

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
  const { order } = useSelector(selectOrder);
  const { packageId } = useParams();

  const handleStart = () => {
    dispatch(getInitialOrder())
      .unwrap()
      .then(res => {
        console.log(res);
        navigate('/order-list');
      })
      .catch(err => {
        console.log(err);
        dispatch(
          setSystemError({
            message: '',
            messageDetails: err.stack,
          })
        );
      });
  };

  useEffect(() => {
    switch (currentPath) {
      case '/':
        setButtonsState({
          RButtonState: {
            text: 'Начать',
            isQR: false,
            // callback: () => {
            //   // dispatch(getInitialOrder());

            //   navigate('/order-list');
            // },
            callback: () => handleStart(),
          },
        });
        break;
      case '/order-list':
        setButtonsState({
          RButtonState: {
            text: 'Готово',
            isQR: true,
            callback: () => {
              dispatch(getInitialPackages(order.orderId));
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
      case `/package-list/${packageId}`:
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
              dispatch(resetOrder());
              dispatch(resetPackages());
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
              dispatch(resetScannedData());
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
