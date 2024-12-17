import styles from './Footer.module.css';
import {ReactComponent as MarcaRegistrada} from '../../assets/marcaRegistrada/marca_registrada.svg';


export default function Footer() {
    return (
        
        <footer className={styles.rodape}>
            <MarcaRegistrada/>

           
            <p>Desenvolvido por Alura.</p>
        </footer>
    );
}
