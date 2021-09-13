const Question = (props)=>{
    
    return(
        <div>
            <div>
                <h3>these are the questions</h3>
            </div>
            {props.questionBank.map((question)=>{
                return(
                    <div>
                        <p>{question.question}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Question;