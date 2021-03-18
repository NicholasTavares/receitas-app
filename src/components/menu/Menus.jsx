import React, { useState } from 'react'
import './Menu.css'

const Menus = props => {

    const [busca, setBusca] = useState('')

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

            <div className='container-tags'>
                <form className='tags'>
                    <div>
                        <div className='container-busca-tags'>
                            <input type="text" />
                        </div>
                    </div>
                </form>

                <form className='tags'>
                    <div>
                        <div className='container-busca-tags'></div>
                    </div>
                </form>
            </div>

        </nav>
    )
}

export default Menus