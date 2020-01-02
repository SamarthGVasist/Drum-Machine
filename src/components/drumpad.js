import React,{Component} from 'react'


  
class DrumPad extends React.Component{

    constructor(){
        super()
        this.handleClick=this.handleClick.bind(this)
    }

    componentDidMount() {
        console.log(this.audio)
        document.addEventListener('keydown', this.handleKeydown)
        window.focus()
      }
      
     
      handleKeydown = e => {
        if(e.keyCode === this.props.letter.charCodeAt()) {
          this.audio.play()
          this.audio.currentTime = 0
          this.props.handleDisplay(this.props.id)
        }
      }
     
    handleClick(){
        console.log(this.audio)
        this.audio.play()
        this.audio.currentTime=0
        this.props.handleDisplay(this.props.id) 
    }
    render(){
        return(<div className="drum-pad" id={this.props.id} onClick={this.handleClick}><p><h1>{this.props.letter}</h1></p>
        <audio ref={ref=>this.audio=ref} className='clip' 
        src={this.props.src}

        id={this.props.letter}></audio>
        </div>)
    }
}

export default DrumPad