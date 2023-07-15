import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import QuotePage from '../pages/QuotePage';
import Quote from '../components/Quote';

describe('Quote Component', () => {
  test('Quote section renders correctly into the DOM', () => {
    const component = renderer.create(
      <MemoryRouter>
        <QuotePage />
      </MemoryRouter>,
    ).toJSON();
    expect(component).toMatchSnapshot();
  });

  test('Quote page renders loading quotes', () => {
    const component = render(
      <MemoryRouter>
        <Quote />
      </MemoryRouter>,
    );

    expect(component.container).toHaveTextContent('Loading Quote...');
  });

  test('Quote page renders Quotes', () => {
    const component = render(
      <MemoryRouter>
        <Quote />
      </MemoryRouter>,
    );

    const quotesContainer = component.container.querySelector('#display-quote');
    expect(quotesContainer).toBeInTheDocument();
  });
});
