import { createContext, ReactNode, useContext, useEffect, useState } from "react";

interface ScoreProviderProps {
    children: ReactNode;
}

interface ScoreContextData {
    score: {
        questions: number,
        correct: number,
        incorrect: number
    },
    changeScore: (isCorrect: boolean) => void,
    resetScore: () => void
}

const ScoreContext = createContext<ScoreContextData>({} as ScoreContextData)



export function ScoreProvider({ children }: ScoreProviderProps) {
    const [score, setScore] = useState({
        questions: 0,
        correct: 0,
        incorrect: 0
    });

    function changeScore(isCorrect: boolean) {
        if (isCorrect === true) {
            setScore({
                questions: score.questions + 1,
                correct: score.correct + 1,
                incorrect: score.incorrect
            })
        } else {
            setScore({
                questions: score.questions + 1,
                correct: score.correct,
                incorrect: score.incorrect + 1
            })
        }
    }

    function resetScore() {
        setScore({
            questions: 0,
            correct: 0,
            incorrect: 0
        })
    }

    return (
        <ScoreContext.Provider value={{ score, changeScore, resetScore }}>
            {children}
        </ScoreContext.Provider>
    )
}

export function useScore() {
    const context = useContext(ScoreContext)
    return context
}