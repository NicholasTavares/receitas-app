import React from 'react'
import './Receita.css'

const Receita = props => {

    return (
        <div className="receita-container">
            <img className="card-img-top img-tamanho-receita" src={props.image} alt={props.alt} />
            <div className="card-descricao">
                <h5 className="card-titulo">{props.title}</h5>
                <span>For&nbsp;<strong>{props.servings}</strong>&nbsp;people</span>
                <a href={props.href} className="botao">Get this recipe</a>
            </div>
        </div>
    )
}

export default Receita