import { ToolIcon } from "../Atoms/photos.atom";
import { Content } from "../Atoms/labels.atom";
import { Frame } from "../Atoms/frames";


interface Iprops {
  src: string;
  name? :string;
}

export default function Skill(props: Iprops) {
    return (
        <Frame>
            <ToolIcon
            src={props.src}
            />
            {props.name}
        </Frame>
    )

}
