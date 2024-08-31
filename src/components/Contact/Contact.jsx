import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactWrapper}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button onClick={() => dispatch(deleteContact(contact.id))}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
