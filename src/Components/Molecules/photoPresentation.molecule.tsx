import { Photo } from "../Atoms/photos.atom";
import img  from "../../assets/photo.png"
interface Iprops { 

}
export default function PhotoPresentation(props: Iprops) {
    return (
        <Photo src={img}/>
    )
    
}