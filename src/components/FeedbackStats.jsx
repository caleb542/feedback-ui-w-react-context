import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
   // calc ratings average
   let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
   }, 0) / feedback.length

   average = average.toFixed(1).replace(/[.,]0$/, '') // If not a whole number show only 1 decimal place.  If it is a whole number don't show the decimal 0 value, but rather just the integer

  return (
    <div className="feedback-stats">
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats