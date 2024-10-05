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
      style={{ background: "black" }}>
      <ResponsiveContainer width='100%' height={200}>
        <RadarChart cx='50%' cy='50%' outerRadius='80%' data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey='kind' tick={{ fill: "#fff" }} />
          <PolarRadiusAxis />
          <Radar
            name='Mike'
            dataKey='value'
            // stroke='#FBFBFB'
            fill='#FF0000'
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
