
function ResultTestPassword() {
    return (
        <div className="container">
            
                <p className="result__text result__before">Your password strength</p>
        <div className="progress">
            <div className="progress-bar bg-success">-----------------------------------</div>
        </div>
                <p className="result__text result__after">Very Weak</p>

                <p className="result__text result__after">Time to crack:</p>
                <p>Seconds to minutes</p>
        </div>
    )
}

export default ResultTestPassword
