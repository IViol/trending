import React from 'react'
import { connect } from 'react-redux'

import { Main } from '../../components'
import { Developer } from './components'
import { RootState, Dispatch } from '../../store'
import { DeveloperData } from '../../models/trending'

type DevelopersStateProps = {
  items: DeveloperData[] | null
  isLoading: boolean
}

type DevelopersDispatchProps = {
  loadItems: () => void
}

type DevelopersProps = DevelopersStateProps & DevelopersDispatchProps

const Developers = ({ loadItems, items, isLoading }: DevelopersProps) => {
  React.useEffect(() => {
    if (!(items || isLoading)) {
      loadItems()
    }
  }, [loadItems, items, isLoading])

  return (
    <Main>
      <div>
        {isLoading || !items || !items.length ? null : items.map(item => (
            <Developer {...item} />
          ))}
      </div>
    </Main>
  )
}

const mapState = ({ trending }: RootState): DevelopersStateProps => ({
  items: trending.developers,
  isLoading: trending.isDevelopersLoading,
});

const mapDispatch = (dispatch: Dispatch): DevelopersDispatchProps => ({
  loadItems: dispatch.trending.loadDevelopers,
});

const DevelopersEnhanced = connect(
  mapState,
  mapDispatch,
)(Developers)

export default DevelopersEnhanced
