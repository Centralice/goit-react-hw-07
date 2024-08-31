import { useEffect, useState } from "react";
import s from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { filterContact } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(filterContact(filter));
  }, [filter, dispatch]);

  return (
    <div className={s.wrapper}>
      <label className={s.label}>Search by name 🔎</label>
      <input
        className={s.input}
        type="text"
        name="input"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
