import css from './filter.module.css';

function Filter({ value, onChange }) {
  return (
    <>
      <label className={css.label_filter} htmlFor="filter">
        Filter
      </label>
      <input
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
        className={css.input_filter}
      />
    </>
  );
}

export default Filter;
