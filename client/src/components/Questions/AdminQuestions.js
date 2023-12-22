import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { startShowQuestion } from "../../action/questionAction";
import { startQuestionKey } from "../../action/adminAction";
import '../css/admin.css'

const AdminQuestions = (props) =>{
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startShowQuestion())
    },[dispatch])
    
    const allQuestions = useSelector((state)=>{
        return state.question
    })
    allQuestions.sort((a,b)=>{
        return b.likes - a.likes
    })

    const handleAnswerChange = (e) =>{
        let id = e.target.name
        let action = '' 
        if(e.target.checked === true){
            action = 'answered'
        }
        if(e.target.checked === false){
            action = 'unAnswered'
        }
        dispatch(startQuestionKey(id,action))
    }
    
    return (
        <div className="questions">
        <div>
            <h5 className="text-info">UnAnswered Questions</h5>
            {allQuestions.map((ele,i)=>{
                return !ele.isAnswered &&
                    <div key={i} className='question'>
                        <p> {i+1}: {ele.data} </p>
                        <div className="details">
                        <button disabled={true}>Likes-{ele.likes.length}</button>
                        <input  type='checkbox' name={ele._id} onChange={handleAnswerChange}  checked={ele.isAnswered}/>
                        <label>Answered</label>
                        <span >~{ele.userId.name}</span>
                        </div>
                    </div>
                
            })}
        </div>
            <hr/>
        <div>
            <h5 className="text-info">Answered Questions</h5>
            {allQuestions.map((ele,i)=>{
                return ele.isAnswered && 
                    <div key={i} className='question'>
                        <p>{i+1}:{ele.data}</p>
                        <div className="details">
                        <button disabled={true}>Likes-{ele.likes.length}</button>
                        <input  type='checkbox' name={ele._id} onChange={handleAnswerChange}  checked={ele.isAnswered}/>
                        <label >Answered</label>
                        <span>~{ele.userId.name}</span>
                        </div>
                    </div>
            })}
        </div>
        </div>
    )
}

export default AdminQuestions