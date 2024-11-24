import React from 'react'
import "./Contato.css";

function Contato() {
  return (
    <section className='section-forms'>
        <div className='forms'>
        <div className="title-contato"><h1>Entre em Contato</h1></div>
        
            <form action="" className='form-contato'>
                <label for="nome" className='campo'>Nome:</label><br/>
                <input type="text" className='form-campo' name="nome" required placeholder='Insira seu nome'/><br/>
                <label for="email" className='campo'>E-mail:</label><br/>
                <input type="email" className='form-campo' name="email" required placeholder='Insira seu e-mail'/><br/>
                <label for="mensagem" className='campo'>Mensagem:</label><br/>
                <textarea id="mensagem" name="mensagem" required placeholder='Insira a sua mensagem'></textarea><br/>
                <input type="submit" value="Enviar" className='form-botao'/>
            </form>
        </div>
    </section>
  )
}

export default Contato