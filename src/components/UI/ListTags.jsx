import React, { useState, useRef } from 'react'
import Tag from './Tag'
import './Tag.css'

const Tags = ({ buscaPorTags, initialSearch }) => {
    const inputRef = useRef()
    const [tags, setTags] = useState([])

    const keyHandler = (e) => {

        if (e.key === 'Enter') {
            const text = inputRef.current.value
            setTags([
                ...tags,
                text
            ])
            inputRef.current.value = ''
            buscaPorTags([...tags, text])
        } else {
            return //TODO: enviar um aviso pra escrever uma tag
        }
    }

    return (
        <div className='tags'>
            <div>
                <input type="text" className='busca-tags-ingredientes' onKeyDown={e => keyHandler(e)}
                    ref={inputRef} />
                <div id='container-tags'>
                    {tags && (tags.map((ingredienteText, index) => <Tag text={ingredienteText} key={index}
                        tagsList={tags} setTagsList={setTags}
                        busca={buscaPorTags} initialSearch={initialSearch} />))}
                </div>
            </div>
        </div>
    )
}

export default Tags