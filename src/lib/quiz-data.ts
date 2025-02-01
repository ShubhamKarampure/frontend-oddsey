export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the time complexity of Bubble Sort in the worst case?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    correctAnswer: 2,
    explanation:
      "Bubble Sort has a worst-case and average time complexity of O(n^2), where n is the number of items being sorted.",
  },
  {
    id: 2,
    question:
      "Which sorting algorithm is known for its stability and is often used as a subroutine in other sorting algorithms?",
    options: ["Quick Sort", "Merge Sort", "Heap Sort", "Selection Sort"],
    correctAnswer: 1,
    explanation:
      "Merge Sort is a stable sorting algorithm often used as a subroutine in other algorithms due to its guaranteed O(n log n) time complexity.",
  },
  {
    id: 3,
    question: "What is the space complexity of Quick Sort?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
    correctAnswer: 1,
    explanation: "Quick Sort has a space complexity of O(log n) due to its recursive nature and the call stack usage.",
  },
  {
    id: 4,
    question: "Which sorting algorithm is best suited for sorting a small number of elements?",
    options: ["Merge Sort", "Heap Sort", "Insertion Sort", "Radix Sort"],
    correctAnswer: 2,
    explanation:
      "Insertion Sort performs well on small datasets or nearly sorted arrays due to its simplicity and low overhead.",
  },
  {
    id: 5,
    question: "What is the main advantage of Counting Sort over comparison-based sorting algorithms?",
    options: [
      "It's always stable",
      "It can sort negative numbers",
      "It has O(n) time complexity",
      "It uses less memory",
    ],
    correctAnswer: 2,
    explanation:
      "Counting Sort has a time complexity of O(n + k), where k is the range of input, making it faster than comparison-based algorithms for certain inputs.",
  },
]

