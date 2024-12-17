import ButtonMain from 'componentes/ButtonMain';
import  styles from './Post.module.css';

import { Link } from 'react-router-dom';

export default function PostCard(props) {
  
    // console.log(props.post.id)
    return (
        <Link to={`/posts/${props.post.id}` /**aqui o to={/posts/${props.post.id}} indica que quando alguem clicar no post vai ser direcionado para a pagina de post relacionado ao id que esta sendo passado */}>
        <div className={`${styles.post} ${styles[props.outrosPosts]}`}>
           <img className={styles.capa} 
           src={ `../../assets/posts/${props.post.id}/capa.png`}
           alt="img de Capa do post" 
           />

           <h2 className={styles.titulo}>{props.post.titulo}</h2>

            <ButtonMain  Children="Ler" />
        </div>
        </Link>
    );
}