import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont input veld', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    expect(input).toBeInTheDocument();
  });

  test('update input bij typen', () => {
    // TODO: Render SearchBar
    // TODO: Vind de input (Hint: screen.getByPlaceholderText('Zoek...'))
    // TODO: Type tekst in input (Hint: fireEvent.change(input, { target: { value: 'React' } }))
    // TODO: Check of input.value 'React' is
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'React' } });
    expect(input.value).toBe('React');
  });

  test('toont zoekterm onder de input', () => {
    // TODO: Render SearchBar
    // TODO: Type 'Jest' in de input
    // TODO: Check of "Zoeken naar: Jest" op het scherm staat
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'Jest' } });
    expect(screen.getByText('Zoeken naar: Jest')).toBeInTheDocument();
  });

  test('toont wissen button als er tekst is', () => {
    // TODO: Render SearchBar
    // TODO: Type tekst in input
    // TODO: Check of button met tekst "Wissen" verschijnt
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(screen.getByText('Wissen')).toBeInTheDocument();
  });

  test('wissen button maakt input leeg', () => {
    // TODO: Render SearchBar
    // TODO: Type tekst in input
    // TODO: Klik op "Wissen" button
    // TODO: Check of input leeg is (value = '')
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Zoek...');
    fireEvent.change(input, { target: { value: 'test' } });
    const clearButton = screen.getByText('Wissen');
    fireEvent.click(clearButton);
    expect(input.value).toBe('');
  });

});
