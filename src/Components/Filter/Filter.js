import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import s from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  return (
    <form>
      <label>
        Find contacts by name
        <input
          className={s.Filter_input}
          type="text"
          value={filter}
          onChange={e => dispatch(setFilter(e.target.value))}
          placeholder="Enter something to start searching"
        />
      </label>
    </form>
  );
}
export default Filter;
