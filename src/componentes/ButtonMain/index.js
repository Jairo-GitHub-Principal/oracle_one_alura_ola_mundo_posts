import styles from './ButtonMain.module.css'
import { useNavigate } from 'react-router-dom';



export default function ButtonMain({ Children,lg,destino }) {

    const navegate = useNavigate();

    return (
        <button
            className={`
                ${styles.botao} 
                ${styles[lg] /**se onde o componente for chamado passarem uma propriedade lg 
                    com o valor = a lg a classe botao.lg sera aplicada ao botao */}` 
            }

            onClick={() => navegate(destino)} /** se o destino for passado a navegação acontece, 
            se não o click do botão nao ativara a navegação  */ 
        >
            {Children}
        </button>

    );
}