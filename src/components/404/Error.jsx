import React from 'react'
import Abelha from './img/image6.png'

function Error() {
  return (
    <div>
        <div className="container">
            <div className="mensagem-desculpa">
                <h1>DESCULPE</h1>
                <h2>Não conseguimos encontrar essa página</h2>
                <p>Volte para a <a href="/home">página principal da SymBee</a></p>
            </div>
            <div className="beea"><img src={Abelha} alt="" /><p><span>Beea</span> Essa é uma das milhares de abelhas que vivem em nossa colméia</p></div>
        </div>
    </div>
  )
}

export default Error