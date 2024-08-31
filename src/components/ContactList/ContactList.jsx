import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name.toLowerCase());
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters)
  );

  return (
    <ul className={s.wrapper}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
