import { NextAdapter } from "next-query-params"

export default function NextQueryParamsAdapter(props: React.ComponentProps<typeof NextAdapter>) {
  return <NextAdapter {...props} shallow={false} />
}
