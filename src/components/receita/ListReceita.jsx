import React, { useState, useEffect } from 'react'
import APIBusca from '../../api/api'
import Receita from './Receita'

const ListReceita = props => {

    const [busca, setBusca] = useState('')
    const [pesquisa, setPesquisa] = APIBusca(null)

    function initialSearch() {
        const initialSeachRandom = {
            BaseURL: 'https://api.spoonacular.com/recipes/',
            //TODO: por a chave da api em um arquivo .env
            method: `random?number=15&apiKey=04a784310ffd4491b22632c5555f119c`,
            type: 'initial'
        }

        return setPesquisa(initialSeachRandom)
    }

    function searchByIngredient(IngridientList) {
        let paramIngredientes = ''
        if (IngridientList) {
            IngridientList.split(' ').map((ingrediente) => {
                if (paramIngredientes === '') {
                    paramIngredientes += `+${ingrediente}`
                } else {
                    paramIngredientes += `,+${ingrediente}`
                }
            })
        }

        const SearchByIngredientParams = {
            BaseURL: 'https://api.spoonacular.com/recipes/',
            //TODO: por a chave da api em um arquivo .env
            method: `findByIngredients?ingredients=${paramIngredientes}&number=15&apiKey=04a784310ffd4491b22632c5555f119c`,
            type: 'byIngredient'
        }

        return setPesquisa(SearchByIngredientParams)
    }

    useEffect(() => initialSearch(), [])

    return (
        <div className='col'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                        onChange={(e) => setBusca(e.target.value)} value={busca} />
                    <button className="btn btn-outline-success my-2 my-sm-0"
                        type="button" onClick={() => searchByIngredient(busca)}>
                        Search
                    </button>
                </form>
            </nav>

            {console.log(pesquisa)}
            <div className='alinhamento-cards'>
                {pesquisa ? pesquisa.map((receitaDado) =>
                (<Receita title={receitaDado.title}
                    image={receitaDado.image}
                    alt={receitaDado.title}
                    href={receitaDado.sourceUrl}
                    servings={receitaDado.servings}
                    key={receitaDado.id}
                />))
                    : <div>Carregando...</div>}
            </div>

        </div>
    )
}

export default ListReceita