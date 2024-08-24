import { Content } from "../Atoms/labels.atom";
interface Iprops {
  title?: {
    value: string;
    className?: string;
  };
  subTitle?: {
    value: string;
    className?: string;
  };
  text?: {
    value: string;
    className?: string;
  };
}
export default function MoleculeTextField(props: Iprops) {
  return (
    <div>
      <Content className={props.title?.className}>
        <h3>{props.title?.value}</h3>
      </Content>
      <Content className={props.subTitle?.className}>
        <p>{props.subTitle?.value}</p>
      </Content>
      <Content className={props.text?.className}>{props.text?.value}</Content>
    </div>
  );
}
