import React from 'react'
import { connect } from 'react-redux'

import { Main } from '../../components'
import { Repository } from './components'
import { RootState, Dispatch } from '../../store'
import { RepositoryData } from '../../models/trending'

type RepositoriesStateProps = {
  items: RepositoryData[] | null
  isLoading: boolean
}

type RepositoriesDispatchProps = {
  loadItems: () => void
}

type RepositoriesProps = RepositoriesStateProps & RepositoriesDispatchProps

const Repositories = ({ loadItems, items, isLoading }: RepositoriesProps) => {
  React.useEffect(() => {
    if (!(items || isLoading)) {
      loadItems()
    }
  }, [loadItems, items, isLoading])

  return (
    <Main>
      <div>
        {isLoading || !items || !items.length ? null : items.map(item => (
            <Repository {...item} />
          ))}
      </div>
    </Main>
  )
}

const mapState = ({ trending }: RootState): RepositoriesStateProps => ({
  items: trending.repositories,
  isLoading: trending.isRepositoriesLoading,
});

const mapDispatch = (dispatch: Dispatch): RepositoriesDispatchProps => ({
  loadItems: dispatch.trending.loadRepositories,
});

const RepositoriesEnhanced = connect(
  mapState,
  mapDispatch,
)(Repositories)

export default RepositoriesEnhanced
