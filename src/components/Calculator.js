import './Calculator.css';
import Button from './Button';
import {
  OPERATOR,
  NUM_1,
  NUM_2,
  NUM_3,
  NUM_4,
} from '../utils/constants';

function Calculator() {
  return (
    <div className="container">
      <div className="calc-result">0</div>
      <div>
        {OPERATOR.map((item) => (<Button key={item.id} title={item.op} className={`btn-${item.id}`} />))}
      </div>
      <div>
        {NUM_1.map((item) => (<Button key={item.id} title={item.num} className={`btn-${item.id}`} />))}
      </div>
      <div>
        {NUM_2.map((item) => (<Button key={item.id} title={item.num} className={`btn-${item.id}`} />))}
      </div>
      <div>
        {NUM_3.map((item) => (<Button key={item.id} title={item.num} className={`btn-${item.id}`} />))}
      </div>
      <div>
        {NUM_4.map((item) => (<Button key={item.id} title={item.num} className={`btn-${item.id}`} />))}
      </div>
    </div>
  );
}

export default Calculator;
