async function getDetails(data) {
  const newResults = []
  try {
    for (let i=0; i<data.results.length; i++) {
      const response = await fetch(data.results[i].url)
      const data2 = await response.json()
      newResults.push({name: data.results[i].name, image: data2.sprites.other.dream_world.front_default })
    }
    data.results = newResults
    return data
  } catch (error) {

  }
}

export async function getPokemons(url) {
  try {
    const response = await fetch(url)
    if(!response.ok) {
      throw new NetworkError()
    }
    const data = await response.json()
    const newData = getDetails(data)
    console.log(newData)
    return newData
  } catch (error) {
    throw error
  }
}

class NetworkError extends Error {
  constructor() {
    super("Network error")
  }
}