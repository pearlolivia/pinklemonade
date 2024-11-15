import { Question, Answer } from "./components.styles";

interface QAProps {
    question: string;
    answer: string;
}

const QA = ({question, answer}: QAProps) => (
    <>
        <div>
            <Question>
                {question}
            </Question>
            <br />
            <br />
            <Answer>
                {answer}
            </Answer>
        </div>
        <br />
    </>
);

export default QA;