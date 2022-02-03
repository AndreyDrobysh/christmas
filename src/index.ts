import App from './scripts/components/app/App';
import './styles.css';

const app = new App();

document.body.appendChild(app.element);
app.start();
