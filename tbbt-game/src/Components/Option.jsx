import './Option.css'

const Option = ({item,setChoiceToShow}) => {

    const handleSelection = () => {
        console.log('aaaaaaaaaaaaaaaa')
        setChoiceToShow(item)
    }

    return(
        <div className="option" onClick={()=>handleSelection()}>
            <p>{item}</p>
        </div>
    )
}

export default Option