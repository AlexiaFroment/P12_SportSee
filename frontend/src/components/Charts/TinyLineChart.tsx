import {
  ResponsiveContainer,
  LineChart,
  XAxis,
  Tooltip,
  Line,
  TooltipProps,
} from "recharts"

type TinyLineChartProps = {
  data: { day: string; sessionLength: number }[] | undefined
}

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip p-2' style={{ background: "white" }}>
        <p className='text-dark fw-bold'>{`${payload[0].value} min`}</p>
      </div>
    )
  }

  return null
}

export const TinyLineChart: React.FC<TinyLineChartProps> = ({ data }) => {
  return (
    <div
      className='container p-4 mt-5 rounded'
      style={{ background: "#ff0000" }}>
      <p className='fs-4 fw-bold text-white'>Durée moyenne des sessions</p>
      <ResponsiveContainer width='100%' height={200}>
        <LineChart width={300} height={100} data={data}>
          <XAxis
            dataKey='day'
            tick={{ fill: "white" }}
            axisLine={false}
            tickLine={false}
            label={{ position: "insideBottom", offset: -5 }}
          />
          <Line
            type='monotone'
            dataKey='sessionLength'
            stroke='white'
            strokeWidth={2}
            data={data}
            dot={false}
          />
          <Tooltip content={CustomTooltip} cursor={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
