import React from "react";
import Fabiane from "../img/sobre/Fabiane.png";

function Sobre() {
  return (
    <section id="sobre-link" className="sobre-section">
      <div className="sobre-container">
        <h3>Sobre mim</h3>
        <hr />
        <div>
          <p>
            Olá! Meu nome é Fabiane, e sou uma Front End e Web Developer
            apaixonada pelo mundo da programação. Atualmente, estudo na renomada
            PUCPR - Pontifícia Universidade Católica do Paraná, onde tenho a
            oportunidade de aprimorar meu conhecimento em desenvolvimento web.
            Além disso, estou sempre em busca de aprendizado, o que me levou a
            fazer diversos cursos extracurriculares para expandir meu conjunto
            de habilidades.
          </p>

          <p>
            Minha jornada no mundo da programação começou quando eu tinha apenas
            13 anos, e desde então, eu soube que queria me tornar uma
            desenvolvedora. Em 2021, realizei meu sonho ao ingressar na
            faculdade de desenvolvimento, onde tive a oportunidade de explorar
            diversas linguagens, tanto de Back End quanto de Front End. Entre
            elas, incluem-se nomes como Java, Python, SQL, PHP, HTML, CSS e
            JavaScript.
          </p>
          <p>
            À medida que avanço em minha carreira acadêmica e profissional,
            estou aprimorando meu conhecimento em Web Development, focando na
            união de criatividade e habilidades técnicas para criar experiências
            web únicas. Estou entusiasmada para aprender mais, superar
            desafios e contribuir para a área de tecnologia da informação.
          </p>
        </div>
        <img src={Fabiane} alt="Foto Fabiane" width="400" />
      </div>
    </section>
  );
}

export default Sobre;
