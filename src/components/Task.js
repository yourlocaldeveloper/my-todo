import React, { useState } from 'react';
import './Task.scss';

const Task = () => {
  const [tasks, setTasks] = useState([]);

  const [name, setName] = useState('');
  const [finished, setFinished] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const task = {
        id: new Date().getTime().toString(),
        name,
        finished,
      };
      console.log(task);
      setTasks((tasks) => {
        return [...tasks, task];
      });
      setName('');
    } else {
      console.log('empty - no value');
    }
  };
  return (
    <>
      <article className=''>
        <form className='' onSubmit={handleSubmit}>
          <div className='form-row align-items-center justify-content-center'>
            <div className='col-8'>
              <input
                type='text'
                id='name'
                placeholder='Your task'
                className='form-control'
                name='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='col-auto'>
              <button type='submit' className='btn btn-primary'>
                Submit Todo
              </button>
            </div>
          </div>
        </form>
      </article>
      <div className='item-list mt-3'>
        <div className='item-header'>
          <h3>Todo list</h3>
        </div>
        {tasks.map((task, index) => {
          const { id, name, finished } = task;
          return (
            <div className='item row align-items-center' key={id}>
              <div className='col mr-auto'>
                <h5>{name}</h5>
              </div>
              <button className='btn btn-danger'>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Task;
