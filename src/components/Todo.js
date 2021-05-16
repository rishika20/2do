import React from 'react'
import To from './To'

const Todo=({todos,settodos,filter})=> {

  
    return (
      
            <div className="todo-m">
                <ul className="list">
                   { 
                       filter.map(tod=> (
                            <To tod={tod} todos={todos} settodos={settodos} key={tod.id} text={tod.text}/>
                       ))
                        }
                </ul>
            </div>
      
    )
}

export default Todo
