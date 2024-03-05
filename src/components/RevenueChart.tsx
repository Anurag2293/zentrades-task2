import { BarChart } from '@mui/x-charts/BarChart';

type RevenueChartProps = {
    dataset: any[],
    valueFormatter: (value: number) => string,
    chartSetting: any,
    dataKeyYAxis: string,
    dataKeySeries: string
}

export default function RevenueChart({ dataset, valueFormatter, chartSetting, dataKeyYAxis, dataKeySeries }: RevenueChartProps) {
    return (
        <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: dataKeyYAxis }]}
            series={[{ type: "bar", dataKey: dataKeySeries, valueFormatter, color: '#ED8980' }]}
            layout="horizontal"
            {...chartSetting}
            sx={{ backgroundColor: 'white', borderRadius: '2px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
        />
    );
}
