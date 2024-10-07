import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  CartesianGrid,
  TooltipProps,
} from "recharts"

type BarChartProps = {
  data: { day: string; kilogram: number; calories: number }[] | undefined
}

const CustomLegend = () => {
  return (
    <div className='ms-4'>
      <span className='me-3'>
        <span style={{ color: "#020203" }}>⬤</span> Poids (kg)
      </span>
      <span>
        <span style={{ color: "#ff0000" }}>⬤</span> Calories brûlées (kCal)
      </span>
    </div>
  )
}

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip p-2' style={{ background: "#ff0000" }}>
        <p className='text-white text-center'>{`${payload[0].value} kg`}</p>
        <p className='text-white text-center'>{`${payload[1].value} kCal`}</p>
      </div>
    )
  }

  return null
}

const calculateYAxisTicks = (data: { kilogram: number }[]) => {
  const minWeight = Math.min(...data.map((entry) => entry.kilogram))
  const maxWeight = Math.max(...data.map((entry) => entry.kilogram))

  // Premier tick est minWeight - 1
  const firstTick = minWeight - 1
  const midWeight = Math.round((firstTick + maxWeight) / 2)

  return [firstTick, midWeight, maxWeight] // Premier tick calculé pour être min - 1
}

export const BartChart: React.FC<BarChartProps> = ({ data }) => {
  const yAxisTicks = data ? calculateYAxisTicks(data) : [0, 50, 100]

  return (
    <div className='container p-5' style={{ background: "#FBFBFB" }}>
      <div className='d-flex flex-row justify-content-between align-items-center pb-5'>
        <p className='fs-4 fw-bold'>Activité quotidienne</p>
        <CustomLegend />
      </div>
      <div className='p-3'>
        <ResponsiveContainer width='100%' height={200}>
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray='3 3'
              vertical={false}
              horizontal={true}
            />

            <XAxis
              dataKey='day'
              stroke='#9b9eac'
              tickLine={false}
              label={{ position: "insideBottom", offset: -5 }}
            />

            <YAxis hide yAxisId='left' tickCount={3} />
            <YAxis
              yAxisId='right'
              orientation='right'
              stroke='#9b9eac'
              tickLine={false}
              axisLine={false}
              label={{ angle: -90, position: "insideRight" }}
              ticks={yAxisTicks}
              domain={[yAxisTicks[0], yAxisTicks[2]]}
            />

            <Tooltip content={<CustomTooltip />} />

            <Bar
              yAxisId='left'
              dataKey='calories'
              barSize={15}
              radius={[20, 20, 0, 0]}
              fill='#ff0000'
              name='Calories brûlées (kCal)'
            />

            <Bar
              yAxisId='right'
              dataKey='kilogram'
              barSize={15}
              radius={[20, 20, 0, 0]}
              fill='#020203'
              name='Poids (kg)'
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
