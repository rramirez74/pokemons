import { render, screen } from '@testing-library/react';
import App from './App';
import data from "./data.json"

describe('Pokemon APP', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'))

  it("should show a list of pokemon from the API",  async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => data,
    })
    render(<App />);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon');
  })

  it('should show an error message when has a network error', async () => {
    window.fetch.mockRejectedValueOnce(new Error("Network error"))
    render(<App/>)
    expect(await screen.findByText("Network error")).toBeInTheDocument()
  }) 
})
