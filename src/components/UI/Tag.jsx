import React from 'react'
import { BsXCircleFill } from 'react-icons/bs'
import './Tag.css'

const Tag = props => {


    function removeTag(tag) {
        console.log('Lista antes: ', props.tagsList)
        let lista_nova = props.tagsList.filter((ingrediente, _,) => {
            return ingrediente !== tag
        })
        props.setTagsList([lista_nova])
        props.busca(lista_nova)
    }

    return (
        <div className='tag' >
            <div className='text-tag'>
                {props.text}
            </div>
            <div className='remove-tag' onClick={(e) => removeTag(props.text)}>
                <BsXCircleFill />
            </div>
        </div>
    )
}

export default Tag