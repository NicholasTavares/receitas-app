import React from 'react'
import APIBusca from '../api/api'
import ListReceita from '../components/receita/ListReceita'



const Container = () => {



    return (
        <div className='container'>
            <div className='row'>
                <ListReceita />
            </div>
        </div>
    )
}

export default Container
