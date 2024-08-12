import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { edit, getVolunteers } from "../store/volunteers.slice";
import { updateDate, updateId } from "../store/form";
import link from "../env";

const Main = () => {
  const disPatch = useDispatch();

  useEffect(() => {
    disPatch(getVolunteers());
  }, [disPatch]);
  let volunteers = useSelector((state) => state.volunteers.volunteers);
  let id = useSelector((state) => state.form.id);
  let date = useSelector((state) => state.form.date);
  const submitHandler = (e) => {
    e.preventDefault();
    disPatch(edit({ id, date }));
    disPatch(updateId(""));
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div className="container">
          <label>اسم المتطوع</label>
          <input
            list="names"
            placeholder="ادخل اسم المتطوع"
            value={id}
            onChange={(e) => disPatch(updateId(e.target.value))}
          />
          <datalist id="names">
            {volunteers.map(({ name, number }, key) => {
              return (
                name !== "فارغ" && (
                  <option value={key + 1} key={key}>
                    {name + " " + number}
                  </option>
                )
              );
            })}
          </datalist>
        </div>
        <div className="container">
          <label>تاريخ المشاركة</label>
          <input
            type="number"
            min="1"
            max="31"
            value={date}
            onChange={(e) => disPatch(updateDate(e.target.value))}
          />
        </div>
        <button type="submit">مشاركة</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            window.location.href = `${link()}/downloadSheet`;
          }}
        >
          تحميل الشيت
        </button>
      </form>
    </div>
  );
};

export default Main;
