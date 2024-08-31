import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", padding: "25px" }}>Phonebook ☎️</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
