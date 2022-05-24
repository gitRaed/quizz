import { Quizz1 } from "./quizz1";
import { Quizz2 } from "./quizz2";

export function RenderContent(props) {

    let content;
    let { display } = props;

    switch(display) {
        case 1: 
            content = <Quizz1/>
        break;
        case 2:
            content = <Quizz2/>
        break;
        default:
            content = <div>
                Select a quizz !
            </div>
        break;
    }

    return content
}