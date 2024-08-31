import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.contactWrapper}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button onClick={() => handleDelete(contact.id)}>Delete</button>
    </li>
  );
};

export default Contact;
