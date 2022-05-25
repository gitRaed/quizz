import React from 'react';
import '../styles/quizz1.css';

export class Quizz1 extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: 'Orfer',
            age: 22,
            origin: 'Ivory Coast',
            sex: 'man',
            smth: 'Fill the form and you will see something else than myself here.',
            message: 'Fill the form and you will see something else than myself here.'
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    handleSubmit(event) {
        event.preventDefault();
        this.setState({
            message: 'So you are '+ this.state.name +', you are ' + this.state.age + ' and your sex is ' + this.state.sex +
            '. I am sorry, I am kinda new to this sexuality name thing, I apologise in advance if I hurt someone feelings.' +
            ' Returning in context, you also live in ' + this.state.origin + '. Ok, seems like you are cool 😊' + 
            'Oh and you also said that to me : ' + this.state.smth
        })
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name] : value
        });
    }

    render() {
        return (
            <div className="quizz1">
                <form>
                    <h1>Quizz 1</h1>
                    <p>Simple questions</p>
                    <div className='form-content-layout'>
                        <label htmlFor="name">What's your name?</label><br/>
                        <input type="text" id='name' name='name' onChange={this.handleInputChange} placeholder='Name'/> 
                        <br/>
                    </div>
    
                    <div className='form-content-layout'>
                        <label htmlFor="age">How old are you?</label><br/>
                        <input type="text" id='age' name='age' onChange={this.handleInputChange} placeholder='Age'/>
                        <br/>
                    </div>
    
                    <div className='form-content-layout'>
                        <label htmlFor='origin'>Where are you from?</label><br/>
                        <input type="text" id='origin' name='origin' onChange={this.handleInputChange} placeholder='Origin'/>
                        <br/>
                    </div>
    
                    <div className='form-content-layout'>
                        <label htmlFor='sex'>Whats' your gender?</label><br/>
                        <input type="radio" id='man' name='sex' onChange={this.handleInputChange} value='man'/>
                        <label htmlFor='man'>Man</label><br/>
                        <input type="radio" id='woman' name='sex' onChange={this.handleInputChange} value='woman'/>
                        <label htmlFor='woman'>Woman</label><br/>
                        <input type="radio" id='other' name='sex' onChange={this.handleInputChange} value='other'/>
                        <label htmlFor='other'>Other</label><br/>
                    </div>
    
                    <div className='form-content-layout'>
                        <label htmlFor='smth'>Would you like to say something?</label><br/>
                        <textarea id='smth' name='smth' onChange={this.handleInputChange} placeholder='Write something here'/><br/>
                    </div>
    
                    <input className='button' type='submit' value='Submit' onClick={this.handleSubmit}/>
    
                    <div className='message'>
                        {this.state.message}
                    </div>
                </form>
            </div>
        )
    }
}