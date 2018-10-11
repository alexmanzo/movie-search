import React from 'react'
import { shallow, mount } from 'enzyme'

import { searchMovie } from '../actions/searchMovie'
import { SearchForMovie } from './SearchForMovie'

describe('<SearchForMovie />', () => {
  it('Renders without crashing', () => {
    shallow(<SearchForMovie />)
  })

  it('Should dispatch searchMovie when the form is submitted', () => {
    const dispatch = jest.fn()
    const wrapper = mount(<SearchForMovie dispatch={dispatch} />)
    const value = 'Interstellar'
    wrapper.find('input[type="text"]').instance().value = value
    wrapper.simulate('submit')
    expect(dispatch).toHaveBeenCalledWith(searchMovie(value))
  })

  it('Should reset the input when the form is submitted', () => {
    const wrapper = mount(<SearchForMovie dispatch={() => {}} />)
    const input = wrapper.find('input[type="text"]')
    input.instance().value = 'Interstellar'
    wrapper.simulate('submit')
    expect(input.instance().value).toEqual('')
  })
})
