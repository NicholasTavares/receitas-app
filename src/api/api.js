import axios from 'axios'

export default async function APIBusca(dados) {

    let param = ''

    let busca = dados.split(' ')
    busca.map((ingrediente) => {
        if (param === '') {
            param += `+${ingrediente}`
        } else {
            param += `,+${ingrediente}`
        }

        return param
    })

    const SearchParams = {
        //TODO: por a chave da api em um arquivo .env
        BaseURL: `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${param}&apiKey=04a784310ffd4491b22632c5555f119c`,
    }

    let response = null

    try {
        await axios.get(SearchParams.BaseURL).then(res => response = res.data)
    } catch (error) {
        console.log(error)
    }


    return response
}