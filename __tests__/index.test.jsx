import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('when rendering the page', () => {
  beforeEach(() => {
    render(
      <Home 
        wordsData = {
          [{usa_id: 1, usa_word: 'american', uk_word: 'british'}]
        }
      />
    )
  })
  
  it('should display both h1s', () => {
    expect(screen.getByText('American')).toBeVisible()
    expect(screen.getByText('British')).toBeVisible()
  })

  it('should display the data', () => {
    expect(screen.getByText('AMERICAN')).toBeVisible()
    expect(screen.getByText('BRITISH')).toBeVisible()
  })
})