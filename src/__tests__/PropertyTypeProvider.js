import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import axios from 'axios'
import data from '../__mocks__/data'

jest.mock('axios')
const mockAxios = axios
import { PropertyTypeProvider } from '../context/PropertyTypeProvider'

test('Probamos que funcione el contest', async () => {
	mockAxios.get = jest.fn().mockReturnValue({
		data: data,
	})

	const wrapper = ({ children }) => (
		<PropertyTypeProvider>{children}</PropertyTypeProvider>
	)

	render(<PropertyTypeProvider />, { wrapper })

	expect(mockAxios.get).toHaveBennCalled()
})
