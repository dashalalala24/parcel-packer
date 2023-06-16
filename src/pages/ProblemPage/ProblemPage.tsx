import Button, { ButtonColors, ButtonSizes } from '../../components/Button/Button';
import './ProblemPage.css';

export default function ProblemPage() {
  return (
    <main id='problem-page' className='problem-page'>
      <Button
        color={ButtonColors.beige}
        size={ButtonSizes.l}
        text='Позвать бригадира'
        onClick={() => console.log('выплывает нотификейшн "Бригадир скоро подойдет"')}
      />
      <Button
        color={ButtonColors.beige}
        size={ButtonSizes.l}
        text='Нет товара'
        onClick={() => console.log('выплывает нотификейшн "Бригадир скоро подойдет"')}
      />
      <Button
        color={ButtonColors.beige}
        size={ButtonSizes.l}
        text='Бракованный товар'
        onClick={() => console.log('выплывает нотификейшн "Бригадир скоро подойдет"')}
      />
    </main>
  );
}
