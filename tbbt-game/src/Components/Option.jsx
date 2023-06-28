import './Option.css'

const Option = ({item,setChoiceToShow,show}) => {

    const handleSelection = () => {
        console.log('aaaaaaaaaaaaaaaa')
        setChoiceToShow(item)
    }

    return(
        <div className="option" onClick={()=>handleSelection()}>
            <img src={item.image} alt={item.name} />
        </div>
    )
}

export default Option