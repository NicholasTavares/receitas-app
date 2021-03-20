import React, { useState, useRef } from 'react'
import Tag from './Tag'
import './Tag.css'

const Tags = ({ buscaPorTags }) => {
    const inputRef = useRef()
    const [tags, setTags] = useState([])

    const keyHandler = (e) => {

        if (e.key === 'Enter') {
            const text = inputRef.current.value
            setTags([
                ...tags,
                text
            ])
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
                    {console.log('TAGS: ', tags)}
                    {tags.map((ingredienteText, index) => <Tag text={ingredienteText} key={index}
                        tagsList={tags} setTagsList={setTags} busca={buscaPorTags} />)}
                </div>
            </div>
        </div>
    )
}

export default Tags