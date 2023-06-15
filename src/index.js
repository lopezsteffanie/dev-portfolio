import ReactDOM from 'react-dom/client'
import App from './App';
import { ModalProvider } from './context/Modal-Context';
import { ThemeProvider } from './context/Theme-Context';
import './index.css'


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <ThemeProvider>
        <ModalProvider>
            <App/>
        </ModalProvider>
    </ThemeProvider>
);