import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage(){
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    const selectedOption = searchParams.get("selectedOption");
    const quantity = searchParams.get("quantity");
    const buyprice = searchParams.get("buyprice");
    const date = searchParams.get("date");
    return(
        <div className="w-screen h-screen bg-slate-500 flex p-6">
            <div className="w-[500px] mx-auto space-y-4">
                <div className="flex justify-center relative mb-6">
                    <button
                    onClick={()=> navigate(-1)} 
                    className="absolute left-0 top-0 bottom-0 text-slate-100">
                        <ChevronLeftIcon/>
                    </button>
                    <Title>
                        Detalhes da Atividade
                    </Title>
                    
                    
                   
                </div>
                <div className="bg-slate-200 p-4 rounded-md">
                        <h2 className="text-slate-600 font-extrabold ">{selectedOption}</h2>
                        <h3 className="text-xl font-semibold text-slate-600">{title}</h3>
                        <p className="text-slate-600 ">{description}</p>
                        <p className="text-slate-600 ">{quantity}</p>
                        <p className="text-slate-600 ">{buyprice}</p>
                        <p className="text-slate-600 ">{date}</p>

                        
                </div>
            </div>
        </div>
        
    )
}

export default TaskPage;