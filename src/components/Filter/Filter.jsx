import css from "../Filter/Filter.module.css"

export const Filter = ({ filter, change }) => {
  return (
    <div className={css.filterBlock}>
      <label>
        Find contacts by name <br />
        <input type="text" value={filter} className={css.inputFilter} onChange={change} />
      </label>
    </div>
  )
}