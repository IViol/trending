import { Models } from '@rematch/core'

import { trending } from './trending'

export interface RootModel extends Models<RootModel> {
  trending: typeof trending
}

export const models: RootModel = { trending }
