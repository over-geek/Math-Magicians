import useQuote from '../hooks/useQuote';

const Quote = () => {
  const { loading, data, error } = useQuote({});

  return (
    <div id="quotes" className="page-content">
      <div id="display-quote">
        <p id="quote-text" className={`${JSON.stringify(data) === '{}' ? 'd-none' : ''}`}>
          <i>{data?.quote || ''}</i>
          <b>{data?.author || ''}</b>
        </p>
        <p id="loading-message" className={`${!loading ? 'd-none' : ''}`}>{ loading ? 'Loading Quote...' : '' }</p>
        <p id="error-message" className={`${!error ? 'd-none' : ''}`}>{ error || '' }</p>
      </div>
    </div>
  );
};

export default Quote;
