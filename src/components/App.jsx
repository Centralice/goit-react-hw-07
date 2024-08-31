import { useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contactsOps";
import Loader from "./Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loading = useSelector(state => (state.contacts.loading))
  const error = useSelector(state => state.contacts.error);

  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "25px" }}>Phonebook ☎️</h1>
      <ContactForm />
      <SearchBox />
      {loading && <Loader />}
      {error && <h3>ERROR</h3>}
      <ContactList />
    </div>
  );
};

export default App;
