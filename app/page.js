"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  // submitHandler function, also adds task to the list after clicked
  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    console.log(mainTask);
    settitle("");
    setdesc("");
  };

  // fuction to delete task
  const deleteHandler = (i) => {
    let copytask = [...mainTask];
    copytask.splice(i, 1);
    setmainTask(copytask);
  };

  // Rendering list of tasks to the screen
  let renderTask = <h2>No task available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between">
          <div className="flex justify-between px-4 py-2 w-2/3 mb-4">
            <h5 className="text-xl font-semibold w-1/3 ">{t.title}</h5>
            <h6 className="text-xl font-semibold w-2/3 ">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded"
          >
            Delete
          </button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white px-4 py-5 font-bold text-2xl text-center">
        Todo List App
      </h1>
      <form onSubmit={submitHandler}>
        <input
          className="ml-10 mr-5 mt-12 px-3 py-2 border-zinc-500 border-2 rounded "
          placeholder="Enter your title"
          type="text"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
        <input
          className="ml-10 mr-5 mt-12 px-3 py-2 border-zinc-500 border-2 rounded "
          placeholder="Enter your Description here"
          type="text"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-blue-600 px-3 py-2 ml-10 mt-12 rounded text-white font-bold">
          Add task
        </button>
      </form>
      <hr className="mt-5" />
      <div className="p-5 bg-slate-200 ">
        <ul>{renderTask}</ul>
      </div>
      <div className="footer bg-black p-8 ">
        <div className="diclaimer text-white px-10 text-xl">
          <p className="text-center">
            <b className="text-yellow-400 font-bold">Desclaimer:</b> Hello user, I know you are enjoying using this
            app. please make sure while adding any task so that it will complete
            on time. This app will really help you for your daily planning of
            tasks that you need to do on the same day. So, add tasks and try to
            complete it before deadline...Thanking you
          </p>
        </div>
      </div>
    </>
  );
};

export default page;
