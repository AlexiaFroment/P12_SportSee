import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts"

type RadialBartChartProps = {
  data: Array<{ name: string; value: number }> | undefined
}

const CustomLegend: React.FC<{ value: number }> = ({ value }) => {
  return (
    <div
      className='d-flex flex-column align-items-center'
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
      }}>
      <span className='fw-bold fs-1'>{value} %</span>

      <span className='fw-bold fs-5 text-secondary'> de votre</span>
      <span className='fw-bold fs-5 text-secondary'> objectif</span>
    </div>
  )
}

export const RadialBartChart: React.FC<RadialBartChartProps> = ({ data }) => {
  const scoreValue = data?.[0]?.value ?? 0
  return (
    <div
      className='container p-4 mt-5 rounded'
      style={{ background: "#FBFBFB", position: "relative" }}>
      <p className='fs-4 fw-bold'>Score</p>
      <ResponsiveContainer width='100%' height={200}>
        <RadialBarChart
          width={200}
          height={200}
          cx='50%'
          cy='50%'
          innerRadius='100%'
          outerRadius='100%'
          barSize={11}
          startAngle={90}
          endAngle={90 + ((data?.[0]?.value ?? 0) / 100) * 360}
          data={data || []}>
          <RadialBar dataKey='value' fill='#ff0000' cornerRadius={10} />
        </RadialBarChart>
      </ResponsiveContainer>
      <CustomLegend value={scoreValue} />
    </div>
  )
}
