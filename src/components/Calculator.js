import { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import {
  OPERATOR,
  NUM_1,
  NUM_2,
  NUM_3,
  NUM_4,
} from '../utils/constants';
import calculate from '../logic/calculate';

function Calculator() {
  const initialState = {
    operator: null,
    next: null,
    total: null,
  };

  const [dataObj, setDataObj] = useState(initialState);
  const operations = (text) => {
    const result = calculate(dataObj, text);
    setDataObj(result);
  };

  return (
    <div className="container">
      <div className="calc-result">{`${dataObj.next || dataObj.total || 0}`}</div>
      <div>
        {OPERATOR.map((item) => (<Button key={item.id} title={item.op} className={`btn-${item.id}`} interactivity={operations} />))}
      </div>
      <div>
        {NUM_1.map((item) => (<Button key={item.id} title={item.num} className={`btn-${item.id}`} interactivity={operations} />))}
      </div>
      <div>
        {NUM_2.map((item) => (<Button key={item.id} title={item.num} className={`btn-${item.id}`} interactivity={operations} />))}
      </div>
      <div>
        {NUM_3.map((item) => (<Button key={item.id} title={item.num} className={`btn-${item.id}`} interactivity={operations} />))}
      </div>
      <div>
        {NUM_4.map((item) => (<Button key={item.id} title={item.num} className={`btn-${item.id}`} interactivity={operations} />))}
      </div>
    </div>
  );
}

export default Calculator;
