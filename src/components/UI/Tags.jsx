import React from 'react'

const Tags = props => {

    function createTag(text) {

        let container_tags = document.getElementsByClassName('container-tags')


        return (
            <div></div>
        )
    }

    return (
        <form className='tags'>
            <div>
                <input type="text" className='busca-tags' onKeyDown={e => createTag(e.target.value)} />
                <div className='container-tags'>

                </div>
            </div>
        </form>
    )
}

export default Tags