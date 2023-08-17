import { Word } from "./Word";

export const List = (props) => {
    return(
        <div class="accordion word" id={`accordionWords`}>
        {props.list && props.list.map((w,k) =>{
            return <Word word={w} id={k}></Word>
        })}
        </div>
    );
}