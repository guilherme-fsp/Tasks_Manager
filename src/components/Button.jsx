function Button(props){
    return(
        <button
        {...props}
        className="bg-slate-300 text-white p-2 rounded-md ">
        {props.children}
        </button>
        

    );

}
export default Button;