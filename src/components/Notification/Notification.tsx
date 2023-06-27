import { CSSProperties, FC, useEffect } from 'react';
import './Notification.css';
import Icon from '../Icon/Icon';
import ReactDOM from 'react-dom';
import IconImages from '../Icon/types';
import ActionButton from '../ActionButton/ActionButton';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux';
import { closeNotification } from '../../services/redux/slices/notification/notification';
import ItemCard from '../ItemCard/ItemCard';
import { IItemOfOrder } from '../../utils/utils';
import { useLocation } from 'react-router-dom';

enum BorderColors {
  info = 'var(--popup-blue-border)',
  success = 'var(--popup-green-border)',
  fault = 'var(--popup-red-border)',
  warning = 'var(--popup-yellow-border)',
  systemError = 'transparent',
}

enum BackgroundColors {
  info = 'var(--popup-blue-background)',
  success = 'var(--popup-green-background)',
  fault = 'var(--popup-light-red-background)',
  warning = 'var(--popup-yellow-background)',
  systemError = 'var(--popup-red-background)',
}

const Notification: FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const dispatch = useAppDispatch();
  const notificationState = useAppSelector(state => state.notification);
  const { message, messageDetails, type, isVisible, item } = notificationState;

  const notificationStyles: CSSProperties = {
    backgroundColor:
      type === 'info'
        ? BackgroundColors.info
        : type === 'fault'
        ? BackgroundColors.fault
        : type === 'success'
        ? BackgroundColors.success
        : type === 'warning'
        ? BackgroundColors.warning
        : type === 'systemError'
        ? BackgroundColors.systemError
        : 'initial',
    borderColor:
      type === 'info'
        ? BorderColors.info
        : type === 'fault'
        ? BorderColors.fault
        : type === 'success'
        ? BorderColors.success
        : type === 'warning'
        ? BorderColors.warning
        : type === 'systemError'
        ? BorderColors.systemError
        : 'initial',
    width: type === 'systemError' ? '21.8vw' : '25.62vw',
    color: type === 'systemError' ? 'white' : 'black',
  };

  const iconComponent = (
    <Icon
      imgName={
        type === 'info'
          ? IconImages.info
          : type === 'fault'
          ? IconImages.error
          : type === 'success'
          ? IconImages.success
          : IconImages.warningFilled
      }
      width={'2.08vw'}
      style={{ marginRight: '1.04vw' }}
    />
  );

  // // вопросики по уместности этого эффекта
  // useEffect(() => {
  //   if (currentPath === '/') {
  //     dispatch(closeNotification());
  //   }
  // }, [currentPath]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (type !== 'systemError' && type !== 'info') {
      timeout = setTimeout(() => {
        dispatch(closeNotification());
      }, 6000);
    }
    return () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [notificationState]);

  const onClose = () => {
    dispatch(closeNotification());
  };

  const container = document.getElementById('react-notifications');

  return isVisible && container
    ? ReactDOM.createPortal(
        <div className='notification' style={notificationStyles}>
          <div className='notification__message-container'>
            {type === 'systemError' ? null : iconComponent}
            <p className='notification__message'>
              {type === 'systemError' ? `Ошибка ${message}` : message}
            </p>
          </div>

          {messageDetails ? (
            <p className='notification__message-details'>{messageDetails}</p>
          ) : null}

          {type === 'warning' && (
            <ItemCard item={item as IItemOfOrder} hasCounter={false} hasAdditionalTags={false} />
          )}

          {type === 'systemError' ? (
            <div className='notification__close-button-container'>
              <ActionButton icon={IconImages.cross} iconColor='white' onClick={onClose} />
            </div>
          ) : null}
        </div>,
        container
      )
    : null;
};

export default Notification;
