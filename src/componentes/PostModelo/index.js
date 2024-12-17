import styles from './PostModelo.module.css';

// importar o dados do json do post
export default function PostModelo(props) {

   
    return (

        <article className={styles.postModeloContainer}>
             
            <div className={styles.fotoCapa} style={{ backgroundImage: `url(${props.fotoCapa})` }}>
            
            </div >
            <h2 className={styles.titulo}>{props.titulo}</h2>
            
            <div className={styles.postConteudoContainer}>
                <p className={styles.texto}>{props.children}</p>
            </div>
        </article>
    );
}