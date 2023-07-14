import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Calculator from '../components/Calculator';
import CalculatorPage from '../pages/CalculatorPage';

describe('Calculator component', () => {
  test('renders correctly into DOM', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Calculator />
      </MemoryRouter>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('renders the text, \'Let\'s do some Math!\'', () => {
    const component = render(
      <MemoryRouter>
        <CalculatorPage />
      </MemoryRouter>,
    );

    expect(component.container).toHaveTextContent('Let\'s do some Math!0AC+/-%÷789x456-123+0.=');
  });
});
