import React, { useEffect } from 'react'
import APIBusca from '../../api/api'
import Menus from '../menu/Menus'
import Receita from './Receita'
import Anime from '../lotties/kiss-heart'

const ListReceita = props => {

    const [pesquisa, setPesquisa] = APIBusca(null)

    function initialSearch() {
        const initialSeachRandom = {
            BaseURL: 'https://api.spoonacular.com/recipes/',
            //TODO: por a chave da api em um arquivo .env
            method: `random?number=15&apiKey=04a784310ffd4491b22632c5555f119c`,
            type: 'initial'
        }

        return setPesquisa(initialSeachRandom)
    }

    function searchByRecipe(textRecipe) {
        if (textRecipe) {
            const SearchByRecipeParams = {
                BaseURL: 'https://api.spoonacular.com/recipes/',
                //TODO: por a chave da api em um arquivo .env
                method: `complexSearch?query=${textRecipe}&number=15&apiKey=04a784310ffd4491b22632c5555f119c`,
                type: 'byName'
            }

            return setPesquisa(SearchByRecipeParams)
        }
    }

    function searchByIngredient(IngridientList) {
        let paramIngredientes = ''
        if (IngridientList) {
            IngridientList.map((ingrediente) => {
                if (paramIngredientes === '') {
                    paramIngredientes += `+${ingrediente}`
                } else {
                    paramIngredientes += `,+${ingrediente}`
                }
            })
        }

        const SearchByIngredientParams = {
            BaseURL: 'https://api.spoonacular.com/recipes/',
            //TODO: por a chave da api em um arquivo .env
            method: `findByIngredients?ingredients=${paramIngredientes}&number=15&apiKey=7b51c445b4cb4ef4b50cd7d78fd805b4`,
            type: 'byIngredient'
        }

        return setPesquisa(SearchByIngredientParams)
    }

    useEffect(() => initialSearch(), [])

    return (
        <div className='col'>

            <Menus searchByIngredient={searchByIngredient} searchByRecipe={searchByRecipe} initialSearch={initialSearch} />

            <div className='alinhamento-cards'>
                {pesquisa ? pesquisa.map((receitaDado) =>
                (<Receita title={receitaDado.title}
                    image={receitaDado.image}
                    alt={receitaDado.title}
                    href={receitaDado.sourceUrl}
                    servings={receitaDado.servings}
                    key={receitaDado.id}
                />))
                    : <Anime />}
            </div>

        </div>
    )
}

export default ListReceita
