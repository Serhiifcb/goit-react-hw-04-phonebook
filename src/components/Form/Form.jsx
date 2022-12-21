import React, {useState} from "react";
import PropTypes from 'prop-types'
import css from "../Form/Form.module.css"

export const Form = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const handleChange = event => {
    const { name, value } = event.currentTarget
    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  }

  const reset = () => {
    setName('');
    setNumber('');
  }

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({name, number});
    reset();
  };

  return (
      <div className={css.phonebookBlock}>
        <form onSubmit={handleSubmit} className={css.formBlock}>  
          <label>
            Name
            <br />
            <input
              className={css.inputForm}
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <br />
          <label>
            Number <br />
            <input
              className={css.inputForm}
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <br />
          <button type="submit" className={css.addContactButton}>Add contact</button>
        </form>
      </div>
    )
}


// export class Form extends React.Component {
  
//   state = {
//     name: '',
//     number: ''
//   }

  

//   handleSubmit = event => {
//     event.preventDefault();
//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({name: '', number: ''})
//   }

//   render() {
//     const { name, number } = this.state;
//     return (
//       <div className={css.phonebookBlock}>
//         <form onSubmit={this.handleSubmit} className={css.formBlock}>  
//           <label>
//             Name
//             <br />
//             <input
//               className={css.inputForm}
//               type="text"
//               name="name"
//               value={name}
//               onChange={this.handleChange}
//               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//               required
//             />
//           </label>
//           <br />
//           <label>
//             Number <br />
//             <input
//               className={css.inputForm}
//               type="tel"
//               name="number"
//               value={number}
//               onChange={this.handleChange}
//               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//               required
//             />
//           </label>
//           <br />
//           <button type="submit" className={css.addContactButton}>Add contact</button>
//         </form>
//       </div>
//     )
//   };

// } 

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired
}