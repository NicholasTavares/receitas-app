import React from 'react'
import './Receita.css'

const Receita = props => {

    return (
        <div className="card receita-container">
            <img className="card-img-top img-tamanho-receita" src={props.image} alt={props.alt} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.title}</h5>
                <a href={props.href} className="btn btn-primary">Get this recipe</a>
            </div>
        </div>
    )
}

export default Receita