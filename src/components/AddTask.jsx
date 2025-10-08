import { useState } from "react";
import Input from "./Input";
import { ChevronsDown } from "lucide-react";
import OptionClick from "./OptionClick";

function AddTask({ onAddTaskSubmit }){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState("");
    const [buyprice, setBuyPrice] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [date, setDate] = useState("");
    
    return(
    <div className="space-y-4 p-6 bg-slate-400 rounded-md shadow flex flex-col">


        <div className="">
            
            <select
            value={selectedOption}
            onChange={(e)=> setSelectedOption(e.target.value)}
            className="border border-slate-350 outline-slate-400 px-4 py-1 rounded-md w-full text-black font-normal"
            >
                 {/* PENDING ADD TO THE NEXT PAGE THE UPDATED FEATURES */}
                <option placeholder>Selectione uma Opção</option>
                <option value="Gastos">Gastos</option>
                <option value="Recebimentos">Recebimentos</option>
                <option value="Investimentos">Investimentos</option>


            </select>
        </div>
        <Input 
        type="text"
        placeholder="Digite o tipo de Gastos" 
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
        type="number"
        placeholder="Digite a Quantidade Comprada" 
        value={quantity}
        onChange={(event)=> setQuantity(event.target.value)}

        />
        <Input 
        type="number"
        placeholder="Digite o preço de Compra" 
        value={buyprice}
        onChange={(event)=> {
            let val = event.target.value;
            if (selectedOption == "Gastos" && val !== ""){
                val = "-" + Math.abs(val);
            }
            setBuyPrice(val);
        }}

        />
        <Input 
        type="date"
        placeholder="Digite a Data de Compra" 
        value={date}
        onChange={(event)=> setDate(event.target.value)}

        />
        
        <button 
        onClick={()=> {
            if (!title.trim() || !description.trim() || !buyprice.trim() || !quantity.trim() || !date.trim()){
                return alert("Preencha corretamente os dados")
            }
            onAddTaskSubmit(selectedOption, title, description, buyprice, quantity, date)} }
        className="bg-slate-500 text-white border border-slate-350 outline-slate-350 px-4 py-1 rounded-md font-medium">
            Adicionar
        </button>
        
    </div>
    );
}
export default AddTask;