import styles from './MenuLink.module.css';
import { useLocation,Link } from 'react-router-dom';
export default function MenuLink({children,to}) {
     // const localizacao = window.location.pathname // recupera a localização: a url da página usando js
     const local = useLocation() // recupera a localização: a url da página usando um hulk useLocation do
    return (
        <Link  className={`
            ${styles.link} 
            ${ local.pathname === to ? styles.linkDestacado : ''}
            `} to={to}>{children}
        </Link>
    );
}