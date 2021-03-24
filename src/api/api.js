import axios from 'axios'
import { useState } from 'react'

export default function APIBusca(initialSearch) {

    const [result, setResult] = useState(initialSearch)

    function tratamentoDeSintaxe(response, type) {
        console.log(response)
        let changeToList = ''
        switch (type) {

            case ("initial"):
                changeToList = response.recipes
                setResult(changeToList)
                break

            case ("byIngredient"):
                setResult(response)
                break

            case ("byName"):
                changeToList = response.results
                setResult(changeToList)
                break

            default:
                console.log('Não entrou em nenhum dos cases')
        }
    }

    async function Search(parmsSeachObject) {

        let parmsSeach = null
        let response = null

        parmsSeach = parmsSeachObject.BaseURL + parmsSeachObject.method

        try {
            await axios.get(parmsSeach).then(res => {
                console.log('Response: ', res)
                return response = res.data
            })

        } catch (error) {
            console.log(error)
        }

        return tratamentoDeSintaxe(response, parmsSeachObject.type)

    }

    return [result, Search]

}


