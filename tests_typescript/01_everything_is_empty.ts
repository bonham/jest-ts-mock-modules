import { jest, test, expect, describe } from '@jest/globals'
jest.mock('cross-fetch') // Replace all exports with empty mock functions
import fetch, { Headers } from 'cross-fetch'

describe("No mock implementation", () => {

  test('Fetch returns undefined', async () => {

    // Fetch does not return anything
    const response = await fetch("https://nonsense")
    expect(response).toBeUndefined()

  }) 

  test('Headers object has no methods',() => {

    const hdr = new Headers()

    // Original Headers class has an 'append' method. But not this mocked instance
    expect(hdr).not.toHaveProperty('append')
  })

})