import { generateDatesFromYearBeggining } from "../utils/generate-dates-from-year-beggining";
import { FilledDay } from "./FilledDay";
import { HabitDay } from "./HabitDay"

const weekDays = ["D","S","T","Q","Q","S","S"];

const summaryDates = generateDatesFromYearBeggining();

const minimumSummaryDatesSize = 18 * 7 // 18 weeks
const amountOfDaysToFill = minimumSummaryDatesSize - summaryDates.length;

export function SummaryTable() {
    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {
                    weekDays.map((weekDay, index) => {
                        return (
                            <div 
                                key={`${weekDay}-${index}`} 
                                className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center"
                            >
                                {weekDay}
                            </div>
                        )
                    })
                }
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {
                    summaryDates.map(date => {
                        return (
                            <HabitDay key={date.toString()}/>
                        )
                    })
                }

                {
                    amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill }).map((_, index) => {
                        return (
                            <FilledDay key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}