import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
    <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow flex flex-col">

        <Input 
        type="text"
        placeholder="Digite a Atividade:" 
        value ={title}
        onChange={(event)=> setTitle(event.target.value)}
        />
        
        <Input 
        type="text"
        placeholder="Digite a Descrição da Atividade" 
        value={description}
        onChange={(event)=> setDescription(event.target.value)}

        />
        <button 
        onClick={()=> {
            if (!title.trim() || !description.trim()){
                return alert("Preencha corretamente os dados")
            }
            onAddTaskSubmit(title, description)} }
        className="bg-slate-500 text-white border border-slate-350 outline-slate-350 px-4 py-1 rounded-md font-medium">
            Adicionar
        </button>
        
    </div>
    );
}
export default AddTask;