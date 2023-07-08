import { useEffect, useState } from 'react';

const useQuote = (initialState) => {
  const [dataQuote, setDataQuote] = useState({
    loading: true,
    data: initialState,
    error: null,
  });
  const [renderState, setRenderState] = useState(false);

  const getQuote = async () => {
    try {
      const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=success', {
        method: 'GET',
        headers: {
          'X-Api-Key': 'dXJhmatIziaygTXcPGeViw==4VgFFO6un5QTWGjw',
        },
        contentType: 'application/json',
      });
      const [dataResponse] = await response.json();
      const { quote, author } = dataResponse;

      setDataQuote({
        loading: false,
        data: { quote, author },
        error: null,
      });
    } catch (error) {
      setDataQuote({
        loading: false,
        data: null,
        error: error.message,
      });
    }
  };

  useEffect(() => {
    if (!renderState) {
      getQuote();
      setRenderState(!renderState);
    }
  }, [renderState]);

  return dataQuote;
};

export default useQuote;
