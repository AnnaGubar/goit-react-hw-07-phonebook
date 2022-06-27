// import propTypes from 'prop-types';
import { useContacts } from '../hooks/useContacts';
import s from './Filter.module.css';

function Filter() {
  const {filterValue } = useContacts();
  
  const getfilterValue = e => {
    filterValue(e.currentTarget.value);
  };
  
  return (
    <form>
      <label>
        Find contacts by name
        <input
          className={s.Filter_input}
          type="text"
          // value={value}
          onChange={getfilterValue}
          placeholder="Enter something to start searching"
        />
      </label>
    </form>
  );
}

// Filter.propTypes = {
//   value: propTypes.string.isRequired,
//   getfilterValue: propTypes.func.isRequired,
// };

export default Filter;
