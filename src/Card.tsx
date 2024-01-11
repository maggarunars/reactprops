import "./cards.css"
import {MainContainer} from './Styled'

type Props = {
    pic: string,
    name: string,
    song: string,
}
const Card = (props: Props) =>{
    const cardStyles = {
        borderRadius: '10px',
        border: "solid",
        width: "400px",
        padding: "20px",
        height: "400px",
        
    }
    const imgStyle = {
        maxWidth: "100%",
        height: "auto",
       
        

    }
    return ( 
       
       
        <div style={cardStyles}>
             <div className="imageContainer">
        <img style={imgStyle}src={props.pic} alt="photo of artist" />
        </div>
        <h1>{props.name}</h1>
        <p>{props.song}</p>
        </div>
        

    )
     }

export default Card;