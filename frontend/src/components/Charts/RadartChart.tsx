import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts"

type RadartChartProps = {
  data: { kind: string; value: number }[] | []
}
export const RadartChart: React.FC<RadartChartProps> = ({ data }) => {
  return (
    <div
      className='container p-4 mt-5 mx-4 rounded'
      style={{ background: "black", height: "340px", position: "relative" }}>
      <ResponsiveContainer width='100%' height='100%'>
        <RadarChart
          width={200}
          height={200}
          cx='50%'
          cy='50%'
          outerRadius='65%'
          data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' tick={{ fill: "#fff" }} />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar name='Mike' dataKey='value' fill='#FF0000' fillOpacity={0.8} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
