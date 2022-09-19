import { render, screen } from '@testing-library/react';
import App from '../App';

it('testa a requisição para a API', async () => {
  const enemy = [{
    id: 1,
    name: 'Daenerys',
    source: 'Game of Thrones',
    defensePoints: 40,
  }];

  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(enemy),
  });

  render(<App />);

  const enemyName = await screen.findByRole('heading', { name: 'Daenerys', level: 3 });

  expect(enemyName).toBeInTheDocument();
});
