import dayjs from "dayjs"

export const formatGeneralDate = (date: string) => {
  return dayjs(date).format("MMMM, DD YYYY")
}
