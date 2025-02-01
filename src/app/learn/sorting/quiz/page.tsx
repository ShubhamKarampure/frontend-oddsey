import { Quiz } from "@/components/quiz"
import { Heading } from "@/once-ui/components"
export default function QuizPage() {
  return (
    <div className="container mx-auto p-4">
          <Heading marginBottom="l" variant="display-strong-s" className="tw-text-center">
                    Sorting Algorithm Quiz
                  </Heading>
         <div className="tw-flex tw-items-center tw-justify-center tw-h-[400px] tw-w-[800px]  tw-rounded-md">
  <Quiz />
</div>

    </div>
  )
}

