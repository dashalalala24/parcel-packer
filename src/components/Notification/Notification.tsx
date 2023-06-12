import { CSSProperties, FC, ReactElement } from 'react';
import './Notification.css';
import Icon from '../Icon/Icon';
import IconImages from '../Icon/types';
import ActionButton from '../ActionButton/ActionButton';

export enum NotificationType {
  success = 'success',
  fault = 'fault',
  systemError = 'systemError',
  warning = 'warning',
  info = 'info',
}

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

interface INotificationProps {
  type: NotificationType;
  message: string;
  messageDetails?: string;
  child?: ReactElement;
}

const Notification: FC<INotificationProps> = ({
  type,
  message,
  messageDetails,
  child,
}) => {
  const notificationStyles: CSSProperties = {
    backgroundColor:
      type === NotificationType.info
        ? BackgroundColors.info
        : type === NotificationType.fault
        ? BackgroundColors.fault
        : type === NotificationType.success
        ? BackgroundColors.success
        : type === NotificationType.warning
        ? BackgroundColors.warning
        : type === NotificationType.systemError
        ? BackgroundColors.systemError
        : 'initial',
    borderColor:
      type === NotificationType.info
        ? BorderColors.info
        : type === NotificationType.fault
        ? BorderColors.fault
        : type === NotificationType.success
        ? BorderColors.success
        : type === NotificationType.warning
        ? BorderColors.warning
        : type === NotificationType.systemError
        ? BorderColors.systemError
        : 'initial',
    width: type === NotificationType.systemError ? 419 : 492,
    color: type === NotificationType.systemError ? 'white' : 'black',
  };

  const iconComponent = (
    <Icon
      imgName={
        type === NotificationType.info
          ? IconImages.info
          : type === NotificationType.fault
          ? IconImages.error
          : type === NotificationType.success
          ? IconImages.success
          : IconImages.warningFilled
      }
      width={40}
      style={{ marginRight: 20 }}
    />
  );

  const onClose = () => {
    alert('Hello');
  };

  return (
    <div className='notification' style={notificationStyles}>
      <div className='notification__message-container'>
        {type === NotificationType.systemError ? null : iconComponent}
        <p className='notification__message'>{message}</p>
      </div>

      {messageDetails ? (
        <p className='notification__message-details'>{messageDetails}</p>
      ) : null}

      {child}

      {type === NotificationType.systemError ? (
        <div className='notification__close-button-container'>
          <ActionButton
            icon={IconImages.cross}
            iconColor='white'
            onClick={onClose}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Notification;
