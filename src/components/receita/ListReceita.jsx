import React, { useState } from 'react'
import APIBusca from '../../api/api'
import Receita from './Receita'

const ListReceita = props => {

    const [pesquisa, setPesquisa] = useState('')

    function Consulta(dados) {
        let response = APIBusca(dados)

        console.log(`Na página de component ${response}`)
    }



    return (
        <div className='col'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                        onChange={(e) => setPesquisa(e.target.value)} value={pesquisa} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => Consulta(pesquisa)}>
                        Search
                    </button>
                </form>
            </nav>
            <Receita title="Geleia de amora" description="Primeiro, colha as amoras..." />
        </div>
    )
}

export default ListReceita