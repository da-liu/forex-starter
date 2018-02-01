import React from 'react'
import App from './App'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

beforeEach(() => {

  const mockResponse = {"base":"USD","date":"2018-01-31","rates":{"CAD":1.29}}
  const mockFetch = () => Promise.resolve({
    json: () => mockResponse
  })

  global.fetch = jest.fn().mockImplementation(mockFetch)

})

it('shows a #rate span and two inputs with name "USD" and "CAD"', () => {

  const wrapper = shallow(<App />)
  expect(wrapper.find('#rate').length).toBe(1)
  expect(wrapper.find('input[name="CAD"]').length).toBe(1)
  expect(wrapper.find('input[name="USD"]').length).toBe(1)

})

it('calculates correctly on input to CAD', () => {

  const wrapper = mount(<App />)
  const event = { target: { name: 'CAD', value: '10' }}
  wrapper.find('input[name="CAD"]').simulate('change', event)
  expect(wrapper.find('input[name="USD"]').props().value)
    .toBe(Number(10 / 1.29).toFixed(4))

})

it('calculates correctly on input to USD', () => {

  const wrapper = mount(<App />)
  const event = { target: { name: 'USD', value: '10' }}
  wrapper.find('input[name="USD"]').simulate('change', event)
  expect(wrapper.find('input[name="CAD"]').props().value)
    .toBe(Number(10 * 1.29).toFixed(4))

})

// TODO: check fetch completes and rate is updated
