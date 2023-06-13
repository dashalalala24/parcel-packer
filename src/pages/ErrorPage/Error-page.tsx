import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div style={{font: 'var(--font-m)'}} id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>404</i>
      </p>
      <Link to={'/'}>Return to the main page</Link>
    </div>
  );
}