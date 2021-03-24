import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import ListTags from '../UI/ListTags'
import './Menu.css'

const Menus = props => {

    const [busca, setBusca] = useState('')
    const [open, setOpen] = useState(false)

    function buscaPorTags(ingredientes) {
        props.searchByIngredient(ingredientes)
    }

    return (
        <nav className="nav-custom-bar">

            <div id='slide'>
                <div id='busca-nome-receita'>
                    <input id="campo-busca-receita" type="search" placeholder="Cake"
                        aria-label="Search" onChange={(e) => setBusca(e.target.value)} value={busca} />
                    <div id='btn-busca-receita' type="button" onClick={() => props.searchByRecipe(busca)}>
                        <BiSearch />
                    </div>
                </div>

                {open ?
                    <div className='container-tags-busca'>
                        <ListTags buscaPorTags={buscaPorTags} initialSearch={props.initialSearch} />
                    </div> :
                    <div></div>
                }

                <div id='icone-slide' onClick={() => setOpen(!open)}>
                    {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </div>
            </div>

        </nav >
    )
}

export default Menus