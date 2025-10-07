import { ChevronRightIcon, Check, TrashIcon} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks( {tasks, onTaskClick, onDeleteTaskClick}){
    const navigate = useNavigate()
    function onSeeDetailsClick(task){
        const query = new URLSearchParams();
        query.set("title", task.title)
        query.set("description", task.description)
        query.set("selectedOption", task.selectedOption)
        query.set("quantity", task.quantity)
        query.set("buyprice", task.buyprice)
        query.set("date", task.date)
        navigate(`/task?${query.toString()}`)
        
    }
    
    return(
        <ul className="space-y-4 p-6 bg-slate-400 rounded-md shadow">{tasks.map((task)=>(

            <li key={task.id} className="flex gap-2" >
                <button 
                onClick={()=>onTaskClick(task.id)} 
                className= {`bg-slate-300 text-left text-white p-2 rounded-md w-full flex items-center gap-3 ${
                    task.isCompleted && "line-through"}`}>
                    {task.isCompleted && <Check/>}
                    {task.title}
                </button>

                <Button 
                onClick={()=> onSeeDetailsClick(task)}
                ><ChevronRightIcon/>
                </Button>
                <Button
                onClick={() =>onDeleteTaskClick(task.id)} 
                className="bg-slate-300 text-white p-2 rounded-md "><TrashIcon/>
                </Button>
                </li>




        ))}

            </ul>
    );

}

export default Tasks;