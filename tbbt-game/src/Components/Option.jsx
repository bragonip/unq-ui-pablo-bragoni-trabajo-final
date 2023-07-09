import './Option.css'
import interrogation from '../images/interrogation.png'

const Option = ({item,setCurrentSelection,showAnimation,hideSelection}) => {
    return(
        <div className={'option' + showAnimation} onClick={()=>setCurrentSelection(item)}>
            <img src={(hideSelection || !item) ? interrogation : item?.image} alt={item?.name} />
        </div>
    )
}
export default Option