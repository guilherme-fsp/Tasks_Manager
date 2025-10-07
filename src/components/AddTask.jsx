import { useState } from "react";
import Input from "./Input";
import { ChevronsDown } from "lucide-react";
import OptionClick from "./OptionClick";

function AddTask({ onAddTaskSubmit }){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [buyprice, setBuyPrice] = useState("");
    const[isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    
    return(
    <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow flex flex-col">


        <div className="">
            
            <select
            value={selectedOption}
            onChange={(e)=> setSelectedOption(e.target.value)}
            className="border border-slate-350 outline-slate-400 px-4 py-1 rounded-md w-full text-black font-normal"
            >
                 {/* PENDING ADD TO THE NEXT PAGE THE UPDATED FEATURES */}
                <option disabled></option>
                <option value="Gastos">Gastos</option>
                <option value="Recebimentos">Recebimentos</option>
                <option value="Investimentos">Investimentos</option>


            </select>
        </div>
        <Input 
        type="text"
        placeholder="Digite Gasto ou entrada" 
        value ={title}
        onChange={(event)=> setTitle(event.target.value)}
        />
        
        <Input 
        type="text"
        placeholder="Digite a Descrição da Atividade" 
        value={description}
        onChange={(event)=> setDescription(event.target.value)}

        />
        <Input 
        type="text"
        placeholder="Digite a Quantidade Comprada" 
        value={quantity}
        onChange={(event)=> setQuantity(event.target.value)}

        />
        <Input 
        type="text"
        placeholder="Digite o preço de Compra" 
        value={buyprice}
        onChange={(event)=> setBuyPrice(event.target.value)}

        />
        <button 
        onClick={()=> {
            if (!title.trim() || !description.trim() || !buyprice.trim() || !quantity.trim()){
                return alert("Preencha corretamente os dados")
            }
            onAddTaskSubmit(selectedOption, title, description, buyprice, quantity)} }
        className="bg-slate-500 text-white border border-slate-350 outline-slate-350 px-4 py-1 rounded-md font-medium">
            Adicionar
        </button>
        
    </div>
    );
}
export default AddTask;