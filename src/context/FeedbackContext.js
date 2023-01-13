import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'You are nice nice people',
            rating: 10
        },
        {
            id: 2,
            text: 'Your recipes are SO greet',
            rating: 8
        },
        {
            id: 3,
            text: 'I want to eat your muff-ins',
            rating: 9
        },
        {
            id: 4,
            text: 'Not too salty and very nutricious',
            rating: 5
        },
        {
            id: 5,
            text: 'I got a little messy but it might be my fault, not sure |:( ',
            rating: 2
        },

    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
  

    // add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }
    // Delete Feedback
    const deleteFeedback = (id) => {
        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item) => item.id !== id  ))
        }
      }
    // Update feedback item
    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item))
    }
    // set Item to be updated
    const editFeedback = (item) => {
        const input = document.getElementById("input")
        input.focus()
        setFeedbackEdit({
            item,
            edit: true
        })
    }
    return (<FeedbackContext.Provider
    value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}>
    {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext