export interface quizAnsType {
    id: string,
    value: string,
    isCorrectAns: boolean
}

export interface quizType {
    id: string,
    question: string,
    value: string,
    answers: quizAnsType[]
}

const quizMockingData: quizType[] = [
    {
        id: 'ask-1',
        question: 'Ea deserunt officia ad aute consequat minim ullamco eu tempor.',
        value: '',
        answers: [
            {
                id: 'ask-1-ans-1',
                value: 'ans-1',
                isCorrectAns: true
            },
            {
                id: 'ask-1-ans-2',
                value: 'ans-2',
                isCorrectAns: false
            },
            {
                id: 'ask-1-ans-3',
                value: 'ans-3',
                isCorrectAns: false
            },
            {
                id: 'ask-1-ans-4',
                value: 'ans-4',
                isCorrectAns: false
            }
        ]
    },
    {
        id: 'ask-2',
        question: 'Ex do duis ad reprehenderit et ullamco nostrud sunt laboris voluptate eiusmod.',
        value: '',
        answers: [
            {
                id: 'ask-2-ans-1',
                value: 'ans-1',
                isCorrectAns: true
            },
            {
                id: 'ask-2-ans-2',
                value: 'ans-2',
                isCorrectAns: false
            },
            {
                id: 'ask-2-ans-3',
                value: 'ans-3',
                isCorrectAns: false
            },
            {
                id: 'ask-2-ans-4',
                value: 'ans-4',
                isCorrectAns: false
            }
        ]
    }
];

export default quizMockingData;