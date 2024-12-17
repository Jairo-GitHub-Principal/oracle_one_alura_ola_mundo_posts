import styles from "./Post.module.css";
import "./PostMarkdown.css";
import { useParams, useNavigate} from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import posts from '../../json/posts.json';
import NaoEncontrada from 'paginas/paginnaNaoEncontrada/naoEncontrada';
import PostModelo from 'componentes/PostModelo';
import ReactMarkdown from 'react-markdown' // plugin que renderiza um markdown em um componente react
import PageDefault from "componentes/PageDefault";
import OutrosPosts from "componentes/OutrosPosts";





export default function Post() { // nesse componente iremos capturar o parametro da rota
    /** aqui sera capturado o parametro da rota que é o id, que foi passado na rota no componente postCard
     * apos a captura dessa parametro de rota, sera renderizado o componente post com o id capturado
     */

    const params = useParams(); /* huk que possibilita capturar parametros de rota*/
    const navigate = useNavigate(); /* huk que possibilita navegar para outra rota*/

    const post = posts.find((post) => { /** seleciona o post relacionado ao id que foi passado na rota */
        return post.id === Number(params.id);
    });

    // console.log("Post.Find", post);
    if (!post) {
        return <NaoEncontrada />

    }
    function voltar() {
        navigate(-1);
    }
    return (


        <PageDefault> {/** vai renderizar o componente PageDefault e passa o conteudo o componente Post, como conteudo de PageDefault ou seja: o baner casso "post" seja true */}
            <main className={styles.postContainer}>
                <button onClick={voltar} className={styles.buttonVoltar} >
                    <MdArrowBackIos size={40} style={{ cursor: "pointer", marginRight: "-25px" }} />
                    <MdArrowBackIos size={40} />
                </button>


                <section className={styles.posts}>

                </section>

                <PostModelo
                    fotoCapa={`../../assets/posts/${post.id}/capa.png`}
                    titulo={post.titulo}
                >

                    <div className="post-markdown-container">
                        <ReactMarkdown>{post.texto}</ReactMarkdown>
                    </div>

                </PostModelo>

                <OutrosPosts/> {/** chama o componente OutrosPosts que vai renderizar 4 posts aleatorios */}
                

            </main>
        </PageDefault>

    );
}



/** reutilizar o Outlet de rotas aninhadas do react router dom em PageDefault
 * 
 *  <Routes>
            <Route path="*" element={<PageDefault />}>
                <Route index element={
                      <main className={styles.postContainer}>
                      <button onClick={voltar} className={styles.buttonVoltar} >
                          <MdArrowBackIos size={40} style={{ cursor: "pointer", marginRight: "-25px" }} />
                          <MdArrowBackIos size={40} />
                      </button>
  
  
                      <section className={styles.posts}>
  
                      </section>
  
                      <PostModelo
                          fotoCapa={`../../assets/posts/${post.id}/capa.png`}
                          titulo={post.titulo}
                      >
  
                          <div className="post-markdown-container">
                              <ReactMarkdown>{post.texto}</ReactMarkdown>
                          </div>
  
                      </PostModelo>
  
                  </main>
                }/>
            </Route>
        </Routes>
 * 
 */