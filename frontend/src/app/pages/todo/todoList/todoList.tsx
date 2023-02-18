import React from 'react';
import style from './todoList.css';
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';

const TodoList = ({ todoAllData, deleteTodo, editTodoAPI, editOnChange ,check,setCheck,handleCheck}: any) => {
  return (
    <div className={style.line}>
      {todoAllData?.length > 0 ? (
        <>
          {todoAllData.map((todo: any, inx: any) => {
            return (
              <div className={style.todoitem}>
                <div>
                  <input type="checkbox" value={check} onChange={()=>handleCheck(todo?._id,true)} />
                </div>
                <div>
                  <p>{todo?.title}</p>
                  <p>{todo?.creationDate}</p>
                  <p>{todo?.status}</p>
                </div>
                <div>
                  <AiFillDelete className={style.iconwidth} onClick={() => deleteTodo(todo?._id)} />
                  <AiOutlineEdit className={style.iconwidth} onClick={() => editOnChange(todo?._id)} />
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <p className={style.notodo}>No todos</p>
      )}
    </div>
  );
};

export default TodoList;
