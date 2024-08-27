
import ReactDOM from 'react-dom'; 
import App from './App';
import { CartProvider } from '../../Components/CartContext ';


ReactDOM.render( 
    <CartProvider>
        <App />
    </CartProvider>,
    document.getElementById('root')
);
