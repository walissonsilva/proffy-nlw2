import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'
import api from '../../services/api';

interface TeacherItemProps {
  teacher: {
    name: string,
    avatar: string,
    id: number,
    bio: string,
    cost: string,
    subject: string,
    user_id: number,
    whatsapp: string,
  }
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnetion() {
    api.post('connections', {
      user_id: teacher.id,
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>

        <a target="_blank" onClick={createNewConnetion} href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt="Logo do WhatsApp"/>
          Entre em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem;