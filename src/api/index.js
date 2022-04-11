import axios from 'axios'

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
  params: {
    bl_latitude: '11',
    tr_latitude: '12',
    bl_longitude: '109',
    tr_longitude: '109',
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
  },
}

export const getPlacesData = async (sw, ne) => {
  try {
    // request
    const {
      data: { data },
    } = await axios.get(URL, options)
    console.log('Fetched')
    return data
  } catch (error) {
    console.log(error)
  }
}
