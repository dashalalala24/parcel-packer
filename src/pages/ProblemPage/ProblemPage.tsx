import { useNavigate } from 'react-router-dom';
import Button, { ButtonColors, ButtonSizes } from '../../components/Button/Button';
import { setInfo } from '../../services/redux/slices/notification/notification';
import { useAppDispatch } from '../../utils/hooks/redux';
import './ProblemPage.css';

export default function ProblemPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <main id='problem-page' className='problem-page'>
      <Button
        color={ButtonColors.beige}
        size={ButtonSizes.l}
        text='Позвать бригадира'
        onClick={() => {
          dispatch(
            setInfo({
              message: 'Бригадир скоро подойдет',
            })
          );
        }}
      />
      <Button
        color={ButtonColors.beige}
        size={ButtonSizes.l}
        text='Нет товара'
        onClick={() => navigate('/edit-itemslist')}
      />
      <Button
        color={ButtonColors.beige}
        size={ButtonSizes.l}
        text='Бракованный товар'
        onClick={() => navigate('/broken-items')}
      />
    </main>
  );
}
