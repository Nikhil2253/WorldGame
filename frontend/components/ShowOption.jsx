import { useContext } from "react"
import { GameContext } from "../App"

const ShowOption = () => {

 const {state,dispatch,coptions,setCoptions}=useContext(GameContext);
  return (
    <>
      <div className="take-actions">
        <div className="country-opts">

        <div className="country-action-opts" onClick={()=>{
            dispatch({type:"TERRITORIAL_GAIN"})
            setCoptions(false);
        }}>Attack</div>
        <div className="country-action-opts" onClick={()=>{
            dispatch({type:"DIPLOMATIC_GAIN"})
            setCoptions(false);
        }}>Diplomacy</div>
        </div>
        <div className="close-opts" onClick={()=>setCoptions(false)}>X</div>
      </div>
    </>
  )
}

export default ShowOption
