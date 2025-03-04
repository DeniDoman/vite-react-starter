import React from 'react'
import App from './App'

describe('<App />', () => {
  it('shows name after successful fetch', () => {
    cy.intercept('GET', '**/.data/me', {
      statusCode: 200,
      body: { name: 'John' }
    }).as('getData1')

    cy.mount(<App />)
    cy.contains('Hello, John').should('be.visible')
  })
})
