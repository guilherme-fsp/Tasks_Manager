function OptionClick({ children, ...props }){
    return(
        <li
     
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer bg-slate-500"
            {...props}
            >
                {children}
            
        </li>

    );

}
export default OptionClick;