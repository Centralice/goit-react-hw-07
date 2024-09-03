import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/filtersSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.wrapper}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
