import axios from 'axios'
import { useState } from 'react'

export default function APIBusca(InitialParam) {

    const [result, setResult] = useState(InitialParam)

    async function Search(dados) {

        console.log(dados)

        if (dados) {
            let paramIngredientes = ''
            dados.split(' ').map((ingrediente) => {
                console.log(ingrediente)
                if (paramIngredientes === '') {
                    paramIngredientes += `+${ingrediente}`
                } else {
                    paramIngredientes += `,+${ingrediente}`
                }
            })

            //TODO: por a chave da api em um arquivo .env
            const SearchParams = {
                BaseURL: `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${paramIngredientes}&apiKey=04a784310ffd4491b22632c5555f119c`,
            }

            let response = null

            try {
                await axios.get(SearchParams.BaseURL).then(res => response = res.data)

            } catch (error) {
                console.log(error)
            }

            return setResult(response)

        }

        return null

    }

    return [result, Search]

}