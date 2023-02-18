import React from 'react';
import style from './editTodo.css';

interface Iprops {
  handleSubmit: any;
  setEditTitle: any;
  setEditStatus: any;
  editTitle: any;
  editStatus: any;
  getData: any;
}

const TodoEditor = ({ setEditTitle, setEditStatus, editStatus, editTitle, handleSubmit, getData }: Iprops) => {
  return (
    <>
      <div className={style.form__input}>
        <form>
          <div>
            <label>Title</label>{' '}
            <input
              type="text"
              className={style.inputtitle}
              value={editTitle}
              name="editTitle"
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Status</label>{' '}
            <select
              className={style.selectinput}
              value={editStatus}
              onChange={(e) => {
                setEditStatus(e.target.value);
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
              Edit Task
            </button>
            <button>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoEditor;
