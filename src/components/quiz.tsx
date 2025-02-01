"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { quizQuestions, type QuizQuestion } from "@/lib/quiz-data"

export function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)

  const handleAnswerSelection = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }

    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleShowExplanation = () => {
    setShowExplanation(true)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setScore(0)
    setQuizCompleted(false)
  }

  const question: QuizQuestion = quizQuestions[currentQuestion]

  return (
    <Card className="tw-w-full tw-max-w-2xl tw-mx-auto tw-p-5">
      
      <CardContent>
        {!quizCompleted ? (
          <>
            <h2 className="tw-text-xl tw-font-semibold tw-mb-4">
              Question {currentQuestion + 1} of {quizQuestions.length}
            </h2>
            <p className="tw-mb-4">{question.question}</p>
            <RadioGroup onValueChange={(value) => handleAnswerSelection(Number.parseInt(value))}>
              {question.options.map((option, index) => (
                <div key={index} className="tw-flex tw-items-center tw-space-x-2 tw-mb-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            {showExplanation && (
              <div className="tw-mt-4 tw-p-4 tw-bg-muted tw-rounded-md">
                <h3 className="tw-font-semibold tw-mb-2">Explanation:</h3>
                <p>{question.explanation}</p>
              </div>
            )}
          </>
        ) : (
          <div className="tw-text-center">
            <h2 className="tw-text-2xl tw-font-bold tw-mb-4">Quiz Completed!</h2>
            <p className="tw-text-xl tw-mb-4">
              Your score: {score} out of {quizQuestions.length}
            </p>
            <Button onClick={resetQuiz}>Restart Quiz</Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="tw-flex tw-justify-between">
        {!quizCompleted && (
          <>
            <Button onClick={handleShowExplanation} disabled={selectedAnswer === null || showExplanation}>
              Show Explanation
            </Button>
            <Button onClick={handleNextQuestion} disabled={selectedAnswer === null}>
              {currentQuestion < quizQuestions.length - 1 ? "Next Question" : "Finish Quiz"}
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  )
}
