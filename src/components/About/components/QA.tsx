interface QAProps {
    question: string;
    answer: string;
}

const QA = ({question, answer}: QAProps) => (
    <>
        <div>
            <span style={{
                fontSize: '2.75rem',
                fontWeight: 'bold'
            }}>
                {question}
            </span>
            <br />
            <br />
            <span>{answer}</span>
        </div>
        <br />
    </>
);

export default QA;