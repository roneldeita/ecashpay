import axios from 'axios'

export async function AllCountries(){
  return await axios.get(process.env.REACT_APP_COUNTRIES).then(response => response)
}
