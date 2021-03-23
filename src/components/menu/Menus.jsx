import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDown } from 'react-icons/io'
import ListTags from '../UI/ListTags'
import './Menu.css'

const Menus = props => {

    const [busca, setBusca] = useState('')

    function buscaPorTags(ingredientes) {
        props.searchByIngredient(ingredientes)
    }

    return (
        <nav className="nav-custom-bar">

            <div id='slide'>
                <div id='busca-nome-receita'>
                    <input id="campo-busca-receita" type="search" placeholder="Pesquise o nome de uma receita"
                        aria-label="Search" onChange={(e) => setBusca(e.target.value)} value={busca} />
                    <div id='btn-busca-receita' type="button" onClick={() => props.searchByRecipe(busca)}>
                        <BiSearch />
                    </div>
                </div>

                <div className='container-tags-busca'>
                    <ListTags buscaPorTags={buscaPorTags} initialSearch={props.initialSearch} />
                </div>

                <div id='icone-slide'>
                    <IoIosArrowDown />
                </div>
            </div>

        </nav>
    )
}

export default Menus