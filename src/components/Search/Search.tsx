import React, { useCallback, useEffect, useState } from "react"
import SearchField from "./includes/SearchField/SearchField"
import data from '../../assets/ts/data'
import SearchResult from "./includes/SearchResult/SearchResult"
import { useHistory } from "react-router-dom"

interface resultsType {
  city: string;
  region: string;
}

const Search: React.FC = () => {
  const history = useHistory()
  const [inputValue, setInputValue] = useState('')
  const [searchResults, setSearchResults] = useState<resultsType[]>([])
  const [focused, setFocused] = useState(false)

  const submitHandler = (e: React.BaseSyntheticEvent<React.ReactNode>) => {
    e.preventDefault()
    if (searchResults.length) {
      history.push(`/single-city/${searchResults[0].city}`, { from: history.location.pathname })
    }
  }

  const inputHandler = (e: React.BaseSyntheticEvent) => {
    let capitalized = `${e.target.value.charAt(0).toUpperCase()}${e.target.value.slice(1)}`
    setInputValue(capitalized)
  }

  const focusHandler = () => {
    setFocused(true)
  }

  const searchCities = useCallback((value: string) => {
    if (value.length < 3) {
      setSearchResults([])
      return
    }
    setSearchResults(data.filter(city => city.city.match(value) && city.city.indexOf(value) === 0))
  }, [])

  useEffect(() => {
    searchCities(inputValue)
  }, [inputValue, searchCities])

  useEffect(() => {
    const unlisten = history.listen(() => {
      setFocused(false)
    })

    return () => {
      unlisten()
    }
  }, [history])

  return (
    <div className="Search">
      <form onSubmit={submitHandler}>
        <div className="Search__content">
          <SearchField
            onInput={inputHandler}
            onFocus={focusHandler}
          />
          <div className={`Search__results ${!focused ? 'Search__results_hidden' : ''}`}>
            {
              searchResults.length ?
                searchResults.map((result, i) => <SearchResult inputedValue={inputValue} matchedValue={result.city} key={i} />)
                : ''
            }
          </div>
        </div>
      </form>
    </div>

  )
}

export default Search