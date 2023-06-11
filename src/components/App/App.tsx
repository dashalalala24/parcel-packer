import "./App.css";
import Counter from "../Counter/Counter";
import Icon from "../Icon/Icon";
import Button, { ButtonColors, ButtonSizes } from "../Button/Button";
import { IconImages } from "../Icon/types";
import ActionButton from "../ActionButton/ActionButton";

function App() {
  return (
    <div className="page">
      <br />
      <Counter itemsScanned={3} itemsTotal={5} />
      <br />
      <Icon imgName={IconImages.burger} width={70} />
      <br />
      <Button
        onClick={() => {
          console.log("Hello");
        }}
        size={ButtonSizes.xs}
        text="Изменить состав"
        icon={IconImages.edit}
      />
      <br />
      <Button
        onClick={() => {
          console.log("Hello");
        }}
        size={ButtonSizes.s}
        text="Ввести с клавиатуры"
        icon={IconImages.keyboard}
      />
      <br />
      <Button
        onClick={() => {
          console.log("Hello");
        }}
        color={ButtonColors.black}
        size={ButtonSizes.m}
        text="Назад"
      />
      <br />
      <Button
        onClick={() => {
          console.log("Hello");
        }}
        color={ButtonColors.beige}
        size={ButtonSizes.l}
        text="Позвать бригадира"
      />
      <br />
      <Button
        onClick={() => {
          console.log("Hello");
        }}
        color={ButtonColors.yellow}
        size={ButtonSizes.xl}
        text="Готово"
        icon={IconImages.qrCode}
      />
      <br />
      <ActionButton icon={IconImages.cross} onClick={() => {console.log("Hello")}} />
      <br />
      <ActionButton icon={IconImages.backArrow} onClick={() => {console.log("Hello")}} />
    </div>
  );
}

export default App;
