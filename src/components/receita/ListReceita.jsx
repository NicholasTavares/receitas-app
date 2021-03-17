import React, { useState } from 'react'
import APIBusca from '../../api/api'
import Receita from './Receita'

const ListReceita = props => {

    const [busca, setBusca] = useState('')
    const [pesquisa, setPesquisa] = APIBusca(null)

    return (
        <div className='col'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                        onChange={(e) => setBusca(e.target.value)} value={busca} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => setPesquisa(busca)}>
                        Search
                    </button>
                </form>
            </nav>

            {pesquisa ? pesquisa.map((receitaDado) => (
                <Receita title={receitaDado.title} image={receitaDado.image} alt={receitaDado.title} key={receitaDado.id} />
            ))
                : <div>Carregando...</div>}

        </div>
    )
}

export default ListReceita