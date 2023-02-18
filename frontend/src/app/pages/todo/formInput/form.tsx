import React, { useEffect } from 'react';
import style from './form.css';

interface Iprops {
  handleSubmit: any;
  setTitle: any;
  setStatus: any;
  title: any;
  status: any;
}

const TodoCreator = ({ setTitle, setStatus, title, status, handleSubmit }: Iprops) => {
  return (
    <>
      <div className={style.form__input}>
        <form>
          <div>
            <label>Title</label>{' '}
            <input className={style.inputtitle} value={title} onChange={(e) => setTitle(e.target.value)} name="title" />
          </div>
          <div>
            <label>Status</label>{' '}
            <select
              className={style.selectinput}
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              name="status"
            >
              <option value={'select'}>select option</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
          <div className={style.mainbutton}>
            <button type="button" onClick={(e) => handleSubmit(e)}>
              Add task
            </button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoCreator;
