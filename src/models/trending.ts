import { createModel } from '@rematch/core'

import { RootModel } from '.'
import { getJSON } from '../utils'

type DeveloperRepositoryData = {
  description: string
  repositoryName: string
  url: string
}

export type DeveloperData = {
  avatar: string
  name: string
  popularRepository: DeveloperRepositoryData
  rank: number
  since: string
  url: string
  username: string
}

type RepositoryBuildByData = {
  avatar: string
  url: string
  username: string
}

export type RepositoryData = {
  builtBy: RepositoryBuildByData[]
  description: string
  forks: number
  language: string
  languageColor: string
  rank: number
  repositoryName: string
  since: string
  starsSince: number
  totalStars: number
  url: string
  username: string
}

type TrendingState = {
  developers: DeveloperData[] | null
  repositories: RepositoryData[] | null
  isDevelopersLoading: boolean
  isRepositoriesLoading: boolean
}

const DEFAULT_TRENDING_STATE: TrendingState = {
  developers: null,
  repositories: null,
  isDevelopersLoading: false,
  isRepositoriesLoading: false,
}

export const trending = createModel<RootModel>()({
  state: DEFAULT_TRENDING_STATE,
  reducers: {
    setDevelopers(state: TrendingState, developers: DeveloperData[] | null) {
      return {
        ...state,
        developers,
        isDevelopersLoading: false,
      }
    },
    setRepositories(state: TrendingState, repositories: RepositoryData[] | null) {
      return {
        ...state,
        repositories,
        isRepositoriesLoading: false,
      }
    },
    setDevelopersLoading(state: TrendingState, isDevelopersLoading: boolean) {
      return {
        ...state,
        isDevelopersLoading,
      }
    },
    setRepositoriesLoading(state: TrendingState, isRepositoriesLoading: boolean) {
      return {
        ...state,
        isRepositoriesLoading,
      }
    },
  },
  effects: (dispatch) => ({
    async loadDevelopers() {
      dispatch.trending.setDevelopersLoading(true)
      const developers = await getJSON('developers')
      dispatch.trending.setDevelopers(developers)
    },
    async loadRepositories() {
      dispatch.trending.setRepositoriesLoading(true)
      const repositories = await getJSON('repositories')
      dispatch.trending.setRepositories(repositories)
    },
  }),
})
