import { useRef } from 'react';
import '../Tasks/Tasks.css';
import { useState } from 'react';
export const Tasks = () => {
  const statusContent = useRef();
  const taskInput = useRef();
  const [tasks, setTasks] = useState([

  ]);
  const btnStatusClass = useRef();
  const TaskStatus = () => {
    document.body.classList.add('modalTasks');
  };
  const closeModal = () => {
    document.body.classList.remove('modalTasks');
  };

  const handleTaskSubmit = (evt) => {
    evt.preventDefault();
    if(tasks.length >= 3){
      tasks.shift()
    }
    const task = [
      ...tasks,
      {
        id: tasks.at(-1)?.id + 1 || 1,
        text: taskInput.current.value,
      },
    ];
    setTasks(task);
    taskInput.current.value = '';
  };
  const btnModal = (evt) => {
      if (evt.target.matches('.status__btn__urgent')) {
        statusContent.current.textContent = 'Urgent';
        btnStatusClass.current.textContent = 'Urgent';
        btnStatusClass.current.className = 'status__btn__urgent';
      }
      if (evt.target.matches('.status__btn__new')) {
        statusContent.current.textContent = 'New';
        btnStatusClass.current.textContent = 'New';
        btnStatusClass.current.className = 'status__btn__new';
      }
      if (evt.target.matches('.status__btn__default')) {
        statusContent.current.textContent = 'Default';
        btnStatusClass.current.textContent = 'Default';
        btnStatusClass.current.className = 'status__btn__default';
      }
  };

  return (
    <>
      <div className='tasks'>
        <div className='tasks__inner'>
          <div className='tasks__titles'>
            <h3 className='tasks__title'>Tasks</h3>
            <p className='tasks__title'>View all</p>
          </div>
          <p className='tasks__time'>Today</p>
          <form onSubmit={handleTaskSubmit}>
            <div>
              <input
                required
                type='text'
                className='input__task'
                placeholder='Create new task'
                ref={taskInput}
              />
              <button
                onClick={TaskStatus}
                className='tasks__button'
                type='button'
              >
                +
              </button>
            </div>{' '}
            <div className='modal__tasks'>
              <div className='modal__tasks__inner'>
                <button
                  className='button__close__modal'
                  onClick={closeModal}
                >
                  X
                </button>
                <h3 className='modal__title'>Select status</h3>
                <div
                  className='buttons__modal'
                  onClick={btnModal}
                >
                  <button
                    type='button'
                    className='status__btn__urgent'
                  >
                    Urgent
                  </button>
                  <button
                    type='button'
                    className='status__btn__new'
                  >
                    New
                  </button>
                  <button
                    type='button'
                    className='status__btn__default'
                  >
                    Default
                  </button>
                  <button
                    className='add__task'
                    onClick={closeModal}
                  >
                    +
                  </button>
                  <span
                    className='text__tasks'
                    ref={statusContent}
                  ></span>
                </div>
              </div>
            </div>
          </form>
          <ul className='tasks__list'>
            {tasks.map((el) => {
              return (
                <li className='tasks__item'>
                  <input
                    type='checkbox'
                    className='tasks__checkbox'
                  />
                  <span className='tasks__text'>{el.text}</span>
                  <button
                    className='status__btn__default'
                    ref={btnStatusClass}
                  >
                    Default
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

 
