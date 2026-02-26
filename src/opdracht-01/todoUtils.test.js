import { isValidTodo, getTodoPriority } from './todoUtils';

describe('Todo Utils', () => {
  
  // VOORBEELD - Deze test is al ingevuld om te laten zien hoe het werkt
  test('VOORBEELD: isValidTodo geeft true voor normale tekst', () => {
    const resultaat = isValidTodo('Boodschappen doen');
    expect(resultaat).toBe(true);
  });

  test('isValidTodo geeft false voor lege string', () => {
    const result = isValidTodo('');
    expect(result).toBe(false); // Deze test faalt! Vervang deze regel met je eigen test
  });

  test('getTodoPriority geeft high voor urgent', () => {
    const priority = getTodoPriority('urgent dokter afspraak');
    expect(priority).toBe('high');
  });

  test('getTodoPriority geeft low voor normale todo', () => {
    const priority = getTodoPriority('koffie drinken');
    expect(priority).toBe('low');
  });

});
