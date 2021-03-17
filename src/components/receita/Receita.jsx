import React from 'react'
import './Receita.css'

const Receita = props => {

    return (
        <div className="card receita-container">
            <img className="card-img-top" src={props.image} alt={props.alt} />
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Get this recipe</a>
            </div>
        </div>
    )
}

export default Receita