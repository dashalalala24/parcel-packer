import { FC } from 'react';
import './Footer.css';

const Footer: FC = () => {
  return (
    <footer className='footer'>
      <p className='footer__secret'>
        Коммерческая тайна ООО &laquo;Яндекс&raquo;, 119021, Россия, г. Москва, ул. Льва Толстого,
        д.&nbsp;16
      </p>
      <p className='footer__number'>2022.11.1 / 2023.1.68</p>
      <p className='footer__copyright'>&copy;&nbsp;2003&ndash;2023&nbsp;ООО &laquo;Яндекс&raquo;</p>
    </footer>
  );
};

export default Footer;
