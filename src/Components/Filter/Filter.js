import s from './Filter.module.css';

function Filter({value,onChange}) {
  
  return (
    <form>
      <label>
        Find contacts by name
        <input
          className={s.Filter_input}
          type="text"
          value={value}
          onChange={e=>onChange(e.target.value)} 
          placeholder="Enter something to start searching"
        />
      </label>
    </form>
  );
}
export default Filter;
