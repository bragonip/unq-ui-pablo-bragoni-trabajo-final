import './Option.css'

const Option = ({item,setChoiceToShow,show}) => {

    const handleSelection = () => {
        console.log('aaaaaaaaaaaaaaaa')
        setChoiceToShow(item)
    }

    return(
        <div className="option" onClick={()=>handleSelection()}>
            <p>{item.id}</p>
        </div>
    )
}

export default Option