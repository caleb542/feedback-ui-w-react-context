import { useState, useContext, useEffect} from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"
import FeedbackItem from "./FeedbackItem"

function FeedbackForm() {
  
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')
    
    const {addFeedback, feedbackEdit, updateFeedback, setFeedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true) {
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = (e) => {
        setText(e.target.value)
        console.log('change')
        if(text === '' || text === null || text === undefined) {
            setBtnDisabled(true)
            setMessage('')
        } else if(text !== '' && text.length+1 <= 10) {
            setMessage(`Count ${text.length} Text requires a minimum of 10 characters`)
            setText(e.target.value)
            setBtnDisabled(true)
        } else {
            setMessage('')
            setBtnDisabled(false)
           
        }
       
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10) {
            const newFeedback = {
                text,
                rating
            }
            if(feedbackEdit.edit === true) {
                updateFeedback(feedbackEdit.item.id, newFeedback)
                setText('')
                setFeedbackEdit(feedbackEdit.edit = false)
               
            } else{
                addFeedback(newFeedback)
                setText('')
            }
           
        }

    }
return (
    <Card>
        <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input id="input" onChange={handleTextChange} type="text" value={text} placeholder="Write a review" />
                <Button type='submit' isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
        <input type='text' />
    </Card>
    
  )
}

export default FeedbackForm