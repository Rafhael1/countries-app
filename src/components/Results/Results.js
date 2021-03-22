import React, {useState, useEffect} from 'react'

import './Results.scss'

import Loader from '../Loader/Loader'

export default function Results({search}) {

  const [loader,
    setLoader] = useState(true)
  const [countriesInfo,
    setCountriesInfo] = useState({})

  const getCountriesInfo = async() => {
    try {
      const res = await fetch("https://restcountries.eu/rest/v2/all")

      const parseData = await res.json()
      setCountriesInfo(parseData)
      console.log(parseData)

      setLoader(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
   getCountriesInfo()
  }, [])

  return (
    <div>
      <div>
        {
            loader === true ? <Loader /> :
                countriesInfo.filter(info => {
                  if ( search === "") {
                    return info
                  } else if (info.name.toLowerCase().includes(search.toLowerCase())) {
                    return info
                  }
                }).map((info, key) => (
                    <div className="countryBox" key={key} >
                        <img src={ info.flag } alt="" />
                        <div>
                            <h2>{ info.name }</h2>
                            <h5> ( { info.nativeName } ) </h5>
                        </div>
                            <h3> cc: { info.capital }</h3>
                        <h4> Currency: {info.currencies[0].symbol} | { info.currencies[0].code } | { info.currencies[0].name} </h4>
                        <h3>Region: {info.region} </h3>
                        <h3>Languages: {info.languages.map(l => (
                          l.name + ' | ' 
                        ))} </h3>
                    </div>
                ))
        }
      </div>
    </div>
  )
}
