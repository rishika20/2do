import React from 'react'


function Form({todos,settodos,input,setinput,setstatus}) {
 const inputHandler=(e)=>
 {  console.log(e.target.value)
     setinput(e.target.value)
 }
 const setHandler=(e)=>
 {
     setstatus(e.target.value)
 }
 const sHandler=(e)=>
 {
     e.preventDefault()
     settodos([
         ...todos,{text:input,completed:false,id:Math.random()*1000}]   )
     setinput(" ")
 }

    return (
       <form className="form">
           <input type="text" value={input} onChange={inputHandler} className="inp" />
           <button onClick={sHandler} className="But" type="submit"><i class="fa fa-plus-square" aria-hidden="true"></i></button>
           <div className="select">
               <select className="todo" onChange={setHandler}>
                   <option  value="all">All</option>
                   <option   value="completed">Completed</option>
                   <option  value="uncompleted">Uncompleted</option>
               </select>
           </div>

       </form>
    )
}

export default Form
