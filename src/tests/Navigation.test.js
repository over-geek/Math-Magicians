import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Navigation from '../components/Navigation';

describe('navigation component', () => {
  test('navigation section renders correctly into the DOM', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('navigation section renders all nav links', () => {
    const component = render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>,
    );

    const navComponents = component.container;
    const navlinks = navComponents.querySelectorAll('a');
    expect(navlinks.length).toBe(4);
    expect(navComponents).toHaveTextContent('Math MagiciansHomeCalculatorQuote');
  });
});
