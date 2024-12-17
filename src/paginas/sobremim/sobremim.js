import PostModelo from 'componentes/PostModelo';
import fotoCapa from '../../assets/sobre_mim_capa.png';
import fotoSobremim from '../../assets/sobre_mim_foto.png';
import styles from './sobreMim.module.css';
import { useNavigate } from 'react-router-dom'; /**  aqui usamos esse huk para valtar para a pagina anterior */
import { MdArrowBackIos } from "react-icons/md";




export default function Sobremim() {
    const navigate = useNavigate();

    function voltar() {
        navigate(-1); /*o -1 paasado como parametro  para o huk faz ele entender que quer voltar uma pagina */
    }
    return (
        <main>
             <button onClick={voltar} className={styles.buttonVoltar} >
                <MdArrowBackIos size={40} style={{  cursor: "pointer", marginRight: "-25px" }}/> 
                <MdArrowBackIos size={40} /> 

                </button>
        <PostModelo
            fotoCapa={fotoCapa}
            titulo={"Sobre mim"}

        >
           
            <h3 className={styles.Sobremim}> Ola eu sou o antonio</h3>
            <img
                src={fotoSobremim}
                alt="Foto antonio sorrindo"
                className={styles.fotoSobreMim}
            />


            <p className={styles.paragrafo}>

                Oi, tudo bem? Eu sou instrutor de Front-end na Alura e estou feliz de te ver por aqui.
            </p>


            <p className={styles.paragrafo}>

                Minha história com programação começou no Instituto Federal do Piauí (IFPI), quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
            </p>


            <p className={styles.paragrafo}>

                No ensino superior, escolhi cursar Engenharia Elétrica na Universidade Federal do Piauí (UFPI). Lá eu consegui entrar no PET (Programa de Educação Tutorial), um grupo acadêmico que contribui de diversas formas para o curso. Lá eu tive a oportunidade de estudar desenvolvimento web para ser um dos mantenedores do site deles.
            </p>
           
           
            <p className={styles.paragrafo}>
            Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação para o site, e aprendi muito enquanto codificava.
            </p>

            <p className={styles.paragrafo}>

                E foi enquanto eu estava no PET que decidi procurar um estágio em desenvolvim className={}ento web. Eu encontrei uma vaga na Alura para o Scuba Team e percebi que ela aliava duas paixões minhas: programação e educação. Para minha felicidade, fui escolhido para fazer parte do time.
            </p>


            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados. A Alura é uma escola não só para seus alunos e alunas, mas também para os colaboradores e colaboradoras. Hoje sou muito feliz de ter a oportunidade de trazer esses conteúdos ricos e encantadores para você. Espero que aprenda bastante!

            </p>






        </PostModelo>


        </main>

    );
}