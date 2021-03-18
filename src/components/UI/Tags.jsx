import React, { useState } from 'react'
import './Tag.css'

const Tags = props => {

    const [buscaText, setBuscaText] = useState('')

    const keyHandler = (e, text) => {
        //tentar usar isso para diferenciar os outros campos
        //console.log('Evento: ', e.target.className)
        if (e.key === 'Enter') {
            createTag(text)
        } else {
            return //TODO: enviar um aviso pra escrever uma tag
        }
    }

    function createTag(text) {
        let container_tags = document.getElementById('container-tags')
        console.log(container_tags)
        let tag = document.createElement("div")
        tag.className = 'tag'
        tag.innerHTML = text
        container_tags.appendChild(tag)
        Search()
    }

    function Search() {
        let campoIngredientes = document.getElementById('container-tags')
        let ingredientes = campoIngredientes.children
        let ingredientesText = []
        for (let i = 0; ingredientes.length > i; i++) {
            ingredientesText[i] = ingredientes[i].innerHTML
        }

        props.buscaPorTags(ingredientesText)

    }


    return (
        <div className='tags'>
            <div>
                <input type="text" className='busca-tags-ingredientes' onKeyDown={e => keyHandler(e, buscaText)}
                    value={buscaText} onChange={e => setBuscaText(e.target.value)} />
                <div id='container-tags'>

                </div>
            </div>
        </div>
    )
}

export default Tags