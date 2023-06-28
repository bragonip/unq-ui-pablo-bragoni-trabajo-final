import rock from '../images/rock.png'
import paper from '../images/paper.png'
import scissors from '../images/scissors.png'
import lizard from '../images/lizard.png'
import spock from '../images/spock.png'

const GameItems = [
    {id:1,name:'Rock',image:rock,beats:[3,4]},
    {id:2,name:'Paper',image:paper,beats:[1]},
    {id:3,name:'Scissors',image:scissors,beats:[2,4]},
    {id:4,name:'Lizard',image:lizard,beats:[2]},
    {id:5,name:'Spock',image:spock,beats:[4,1]},
]

export default GameItems