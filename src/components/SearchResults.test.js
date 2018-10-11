import React from 'react'
import { shallow } from 'enzyme'

import { SearchResults } from './SearchResults'

describe('<SearchResults />', () => {
  it('Renders without crashing', () => {
    shallow(<SearchResults />)
  })

})
