import './Option.css'
import interrogation from '../images/interrogation.png'

const Option = ({item,setCurrentSelection,showAnimation,hideSelection}) => {

    const handleSetCurrentSelection = () =>{
        if (setCurrentSelection) {
            setCurrentSelection(item)
        }
    } 

    return(
        <div className={'option' + showAnimation} onClick={()=>handleSetCurrentSelection(item)}>
            <img src={(hideSelection || !item) ? interrogation : item?.image} alt={item?.name} />
        </div>
    )
}
export default Option