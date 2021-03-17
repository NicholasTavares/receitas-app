import axios from 'axios'
import { useState } from 'react'

export default function APIBusca(initialSearch) {

    const [result, setResult] = useState(initialSearch)

    function tratamentoDeSintaxe(response, type) {
        switch (type) {

            case ("initial"):
                let changeToList = response.recipes
                setResult(changeToList)
                break

            case ("byIngredient"):
                setResult(response)
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
            await axios.get(parmsSeach).then(res => response = res.data)

        } catch (error) {
            console.log(error)
        }

        return tratamentoDeSintaxe(response, parmsSeachObject.type)

    }

    return [result, Search]

}


