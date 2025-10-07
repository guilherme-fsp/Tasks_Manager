import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import './index.css';
import {v4} from "uuid";
import Title from "./components/Title";

function App(){
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []
);
   //Salva os Dados Localmente, porém clear cache e afins apaga tudo.
  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  //Ideal para produção: APis\\//
  useEffect(()=>{
    const fetchTasks = async() => {
      const response = await fetch(
        "link_da_api",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTasks(data);
    };
      fetchTasks();
  }, []);
  
  function onTaskClick(taskId){
    const newTasks = tasks.map((task)=>{
        if (task.id==taskId){
            return{ ...task, isCompleted: !task.isCompleted};
        }
        return task;
    });
    setTasks(newTasks);

  }
  function onDeleteTaskClick(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId)
    setTasks(newTasks)
  }
  function onAddTaskSubmit(title, description, selectedOption, buyprice, quantity){
    const newTasks = {
        id: v4(),
        title: title,
        description: description,
        isCompleted: false,
        selectedOption: selectedOption,
        buyprice: buyprice,
        quantity: quantity,
    }
    setTasks([...tasks, newTasks]  )


  }
  




    return(
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <Title>
                  Gestão Financeira
                  </Title>
            <AddTask
            onAddTaskSubmit={onAddTaskSubmit} 
            />
            <Tasks 
            tasks={tasks} 
            onTaskClick={onTaskClick}
            onDeleteTaskClick={onDeleteTaskClick}
            />

            </div>
        </div>
    );
}

export default App;