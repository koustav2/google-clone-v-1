/* eslint-disable no-unused-vars */
import React from 'react'
import { useState, useEffect } from 'react'
import API_KEY from '../../keys.js'

const CONTEXT_KEY = "0a56478d9c3fbcf22"

const useGoogleSearch =(term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData()
    }, [term])

    return { data }

    
}

export default useGoogleSearch