import { CSSProperties, FC, useEffect } from 'react';
import './Notification.css';
import Icon from '../Icon/Icon';
import ReactDOM from 'react-dom';
import IconImages from '../Icon/types';
import ActionButton from '../ActionButton/ActionButton';
import { useAppDispatch, useAppSelector } from '../../utils/hooks/redux';
import { closeNotification } from '../../services/redux/slices/notification/notification';
import ItemCard from '../ItemCard/ItemCard';
import { IItem } from '../../utils/orderExamples';

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
    width: type === 'systemError' ? 419 : 492,
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
      width={40}
      style={{ marginRight: 20 }}
    />
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (type !== 'systemError') {
      timeout = setTimeout(() => {
        dispatch(closeNotification());
      }, 10000);
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

          {type === 'warning' && <ItemCard item={item as IItem} hasCounter={false} />}

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
