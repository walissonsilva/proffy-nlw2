import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/13500056?s=460&u=e73f08c55c50debdb8a27c038d3b68af30e01fdd&v=4" alt="Walisson Silva"/>
        <div>
          <strong>Walisson Silva</strong>
          <span>Programação em Python</span>
        </div>
      </header>

      <p>
        Sou programador Python e desenvolvedor Web.
        <br/> <br/>
        Algo mais aqui embaixo relacionado as minhas experiências, formação, dentre outros.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 40,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Logo do WhatsApp"/>
          Entre em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;