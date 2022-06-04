import { getMoviesUrl } from "@/config/api.config"
import { IMovie } from "@/shared/types/movies.types"
import { axiosClassic } from "api/interceptors"

export const MovieService = {
  async getAll(searchTerm?: string) {
    return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
      params: searchTerm
        ? {
          searchTerm
        } : {}
    })
  },

  async getMostPopularMovies() {
    const { data: movies } = await axiosClassic.get<IMovie[]>(getMoviesUrl('/most-popular'))

    return movies
  }
}