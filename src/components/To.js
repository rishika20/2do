import React from 'react'

function To({text,tod,todos,settodos}) {
    const dHandler=()=>
    {
        settodos(todos.filter((el)=>el.id!==tod.id))
    }
    const cHandler=()=>
    {  settodos(
        todos.map((item)=>
        {
            if(item.id===tod.id)
            {
                return { ...item,completed:!item.completed}
            }
            return item
        }))
    }
    return (
        <div className="q">
            <li className={` n ${tod.completed? "comp":""}`}>
               {text}
            </li>
            <button onClick={cHandler} className="ppp"><i class="fa fa-check"></i></button>
            <button onClick={dHandler} className="pu"><i class="fa fa-close"></i></button>
        </div>
    )
}

export default To
