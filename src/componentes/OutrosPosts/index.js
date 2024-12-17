import PostCard from 'componentes/PostCard';
import styles from './OutrosPosts.module.css';
import posts from '../../json/posts.json';
export default function OutrosPosts(){

    /** selecionar 4 posts aleatorios */
    const pegar_Posts = (posts, count = 4) => {
        const shuffled = posts.sort(() => 0.5 - Math.random()); // Embaralha os posts
        return shuffled.slice(0, count); // Seleciona os primeiros 4
    };

    if (!posts || posts.length === 0) return null; /**se posts === false ou posts.length === 0 retorna null */


    const postsAleatorios = pegar_Posts(posts, 4); /**coloca os 4 posts aleatorios dentro de uma variavel */
    return( 
        <section className={styles.outrosPosts__Container}>
         
            
            <ul className={styles.outrosPosts__Container}>
                {postsAleatorios.map((post) => (/** iterar sobre os 4 posts selecinado e lista-los */
                    <li key={post.id}>
                        <PostCard post={post} outrosPosts="outros-posts-style"/>
                    </li>
                ))}
            </ul>
        </section>
    );
}