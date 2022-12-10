import css from "../Contacts/Contacts.module.css"

export const Contacts = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.contactListBlock}>
      <ul>
        {contacts.map(({ id, name, number }) => (
        <li className={css.contactItem} key={id}>
          <span className={css.spanContact}></span>
          {name}: {number}
          <button className={css.buttonDeleteContact} onClick={() => onDeleteContact(id)}>Видалити</button>
        </li>
          
        ))}
      </ul>
    </div>
  )
}