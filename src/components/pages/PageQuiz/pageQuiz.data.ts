export interface quizAnsType {
    id: string,
    value: string,
    isCorrectAns: boolean
}

export interface quizType {
    id: string,
    value: string,
    answers: quizAnsType[]
}

const quizMockingData: quizType = {
    id: 'ask-1',
    value: 'Questions 1',
    answers: [
        {
            id: 'ask-1-ans-1',
            value: 'ans-1',
            isCorrectAns: true
        },
        {
            id: 'ask-2-ans-2',
            value: 'ans-2',
            isCorrectAns: false
        },
        {
            id: 'ask-3-ans-3',
            value: 'ans-3',
            isCorrectAns: false
        },
        {
            id: 'ask-4-ans-4',
            value: 'ans-4',
            isCorrectAns: false
        }
    ]
}

export default quizMockingData;