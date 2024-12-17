import React from 'react';
import styles from './Menu.module.css'
import MenuLink from '../MenuLink';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Menu() {

    return (
        <div className={styles.navegacao}>
            <MenuLink children={"Início"} to={"/"} /> {/**componente criado pelo desenvolvedor para servir como componente de link denavegação */}
            <MenuLink children={"Sobre mim"} to={"/sobremim"} />

             { /** compontente da biblioteca react-router-dom pronto para viabilizar a navegação */}
            {/* <NavLink
                children={"Página não encontrada"} // passa o nome do link  que sera exibido para o usuario
                to={'/naoEncontrada'}// passa o endereço do link pra onde o link levara o usuario
                className={({ isActive }) => isActive ? styles.linkDestacado : styles.link} // marca o link como ativo
            /> */}
            {/** abaixo temos um link criado com o uso da co componente link da biblioteca react-router-dom
             * o to recebe o endereço do link e o children recebe o nome do link      */}    
            {/* <Link className={styles.link} to="/sobremim" children={"Teste"}/> */}

            {/** abaixo temos um link criado com o uso da tag a e o atributo href que recebe o endereço do link, e no children recebe o nome do link, ou pode ser colocado o link entre as tags a     */}
            {/* <a href='http://localhost:3000/sobremim' className={styles.link} children={"Teste"} /> */}
            
            {/* de todas essas forams de implementar os links, o uso da tag a, não é muito aconselhavel
            uma vez que ele força o recarregamento da pagin, e no caso do aplicação SPA, isso acaba não sendo
            adequado já que uma aplicação SPA renderiza todas as paginas de uma aplicação em uma unica pagina*/}
        </div>
    );
}