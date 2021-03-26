import React, { Component } from 'react'
class QuizQuestion extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            incorrectAnswer:false
        }
    }
    handleClick(buttonText)
    {
       if(buttonText===this.props.quiz_question.answer)
       {
           this.setState({incorrectAnswer:false})
           this.props.showNextQuestionHandler();
       } 
       else
       {
        this.setState({incorrectAnswer:true})
       }
    }
    render() {
        return (
            <main>
            <section>
        <p>{this.props.quiz_question.instruction_text}</p>
            </section>
            <section className="buttons">
              <ul>
                  <li>
                      {this.props.quiz_question.answer_options[0]}
                  </li>
              </ul>
            </section>
            {this.state.incorrectAnswer?<p className="error">Sorry, that's not right</p>:null}
          </main>
        )
    }
}
export default QuizQuestion;