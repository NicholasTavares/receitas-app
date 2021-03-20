import React, { useState } from 'react'
import ListTags from '../UI/ListTags'
import './Menu.css'

const Menus = props => {

    const [busca, setBusca] = useState('')

    function buscaPorTags(ingredientes) {
        props.searchByIngredient(ingredientes)
    }

    return (
        <nav className="nav-custom-bar">

            <form>
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
                    onChange={(e) => setBusca(e.target.value)} value={busca} />
                <button className="btn btn-outline-success my-2 my-sm-0"
                    type="button" onClick={() => props.searchByIngredient(busca)}>
                    Search
                    </button>
            </form>

            <div className='container-autocomple-tags'>
                <ListTags buscaPorTags={buscaPorTags} />
            </div>

        </nav>
    )
}

export default Menus