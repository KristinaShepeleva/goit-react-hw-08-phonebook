
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContactThunk } from '../../redux/contacts/operation/operation';
import { selectContacts, selectFilter } from 'redux/contacts/selectors/selectors';

function ContactList() {
  const dispatch = useDispatch();
  
  const items = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const contacts = items.filter(item =>
      item.name.toLowerCase().trim().includes(filter.toLowerCase().trim())
    ).sort((first, second) => first.name.localeCompare(second.name));
  

     return (
    <ul className={css.list} >
      {contacts.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          <p >
            {name}: {phone}
          </p>
          
          <button className={css.button_delete} type="button" onClick={() => dispatch(deleteContactThunk(id))}>
                Delete
              </button>
        </li>
      ))}
    </ul>
  );
}


export default ContactList;