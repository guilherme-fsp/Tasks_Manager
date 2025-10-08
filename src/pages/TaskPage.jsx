import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const selectedTitle = searchParams.get("title");
    const urlTask = selectedTitle ? [{
        title: selectedTitle,
        description: searchParams.get("description") || "",
        selectedOption: searchParams.get("selectedOption") || "",
        quantity: searchParams.get("quantity") || "",
        buyprice: searchParams.get("buyprice") || "",
        date: searchParams.get("date") || "",
    }] : [];

    // Merge tasks from storage with URL task (avoid duplicates)
    const allTasks = [...storedTasks, ...urlTask.filter(t => !storedTasks.find(s => s.title === t.title))];

    // Grid layout same as before
    return (
        <div className="w-screen h-screen bg-slate-500 flex flex-col p-6 overflow-y-auto">
            <div className="flex justify-center relative mb-6">
                <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0 text-slate-100">
                    <ChevronLeftIcon />
                </button>
                <Title>Detalhes da Atividade</Title>
            </div>

            <div className="grid grid-cols-2 gap-40">
                {allTasks.map((task, index) => {
                    const value = Number(task.buyprice);
                    const isIncome = task.selectedOption === "Recebimentos";
                    return (
                        <div key={index} className={`${isIncome ? "justify-self-start" : "justify-self-end"}`}>
                            <div className={`p-6 rounded-md shadow-md w-[300px] ${isIncome ? "bg-green-100" : "bg-red-100"}`}>
                                <h2 className="text-lg font-bold text-slate-800">{task.selectedOption}</h2>
                                <h3 className="font-semibold text-slate-600">{task.title}</h3>
                                <p className="text-slate-600">{task.description}</p>
                                <p className="text-slate-600">Quantidade: {task.quantity}</p>
                                <p className={`text-slate-600 ${value >= 0 ? "text-green-600" : "text-red-600"}`}>
                                    Preço = {value >= 0 ? `+${value}` : value}
                                </p>
                                <p className="text-slate-600">Data: {task.date}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default TaskPage;