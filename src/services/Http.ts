import axios from 'axios'
import { Resto } from './interfaces/restaurant';

export class Http {
  static async getRestaurants(query: string): Promise<Resto[]> {
    query = query.length > 0 ? query : 'semarang'
    return new Promise<Resto[]>((resolve, reject) => {
      axios
        .get(`https://developers.zomato.com/api/v2.1/search?q=${query}`, {
          headers: {
            'user-key': '026e5a9f7e29e3051efab94483074ea1'
          },
          params: {
            count: 10
          }
        })
        .then(response => {
          let { restaurants } = response.data
          restaurants = restaurants.map((item: any) => {
            const { restaurant } = item
            return {
              id: restaurant.id,
              name: restaurant.name,
              address: restaurant.location.address
            }
          })
          resolve(restaurants)
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
