import PropTypes from 'prop-types'
import css from "../Contacts/Contacts.module.css"

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.contactListBlock}>
      <ul>
        {contacts.length > 0 ? (contacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <span className={css.spanContact}></span>
          {name}: {number}
          <button className={css.buttonDeleteContact} onClick={() => onDeleteContact(id)}>Видалити</button>
        </li>
          
        ))) : <p>There are no contacts</p>}
      </ul>
    </div>
  )
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ).isRequired,
  onDeleteContact:PropTypes.func.isRequired
}