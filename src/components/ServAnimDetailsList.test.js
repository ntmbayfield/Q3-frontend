import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import ServAnimDetailsList from './ServAnimDetailsList.js'

describe('ServAnimDetailsList', () => {
  it('renders ServAnimDetailsList', () => {
    const wrapper = shallow(<List.Item.WrappedComponent personIds={ [1,823,54] } />)
    expect(wrapper.find('withRouter(Connect(List))')).toHaveLength(3)

    // you can do things like this...
    expect(wrapper.find('withRouter(Connect(List))').first()).toHaveProp('personId', 1)

    // or like this...
    expect(wrapper.find('withRouter(Connect(List))').get(1).props).toHaveProperty('personId', 823)
  })
})
