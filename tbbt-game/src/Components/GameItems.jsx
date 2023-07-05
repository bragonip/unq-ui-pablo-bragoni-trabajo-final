import rock from '../images/rock.png'
import paper from '../images/paper.png'
import scissors from '../images/scissors.png'
import lizard from '../images/lizard.png'
import spock from '../images/spock.png'

const GameItems = [
    {id:0,name:'Rock',image:rock,beats:[2,3]},
    {id:1,name:'Paper',image:paper,beats:[0]},
    {id:2,name:'Scissors',image:scissors,beats:[1,3]},
    {id:3,name:'Lizard',image:lizard,beats:[1]},
    {id:4,name:'Spock',image:spock,beats:[3,0]},
]
export default GameItems