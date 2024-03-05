import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthenticateContext } from '../App'
import RevenueChart from '../components/RevenueChart'
import { 
    METRICS, 
    locationDataset, 
    locationValueFormatter, 
    locationChartSetting,
    jobTypeDataset,
    jobTypeValueFormatter,
    jobTypeChartSetting
} from "../utils/constants"

const Home = () => {
    const navigate = useNavigate()
    const { authenticated } = useContext(AuthenticateContext)

    useEffect(() => {
        if (!authenticated) {
            navigate("/login")
        }
    }, [authenticated])

    return (
        <div className='min-h-screen min-w-full w-fit p-8 bg-[#E7E7E7]'>
            <h1 className='text-md font-bold mb-4'>Company Metrics</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4'>
                {METRICS.map((metric, index) => (
                    <div
                        key={index}
                        className='w-full h-20 bg-white flex flex-col justify-between items-start px-4 py-2 shadow-md rounded-sm border-0 border-s-8 border-primary'
                    >
                        <p className={`text-xl font-semibold ${metric.highlight && 'text-primary'}`}>{metric.stat}</p>
                        <p className='font-semibold'>{metric.title}</p>
                    </div>
                ))}
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2'>
                <div>
                    <h1 className='text-md font-bold mb-4 mt-8'>Revenue By Job Location</h1>
                    <RevenueChart 
                        dataset={locationDataset} 
                        valueFormatter={locationValueFormatter} 
                        chartSetting={locationChartSetting} 
                        dataKeyYAxis='location'
                        dataKeySeries='revenue'
                    />
                </div>
                <div>
                    <h1 className='text-md font-bold mb-4 mt-8'>Revenue By Job Type</h1>
                    <RevenueChart 
                        dataset={jobTypeDataset} 
                        valueFormatter={jobTypeValueFormatter} 
                        chartSetting={jobTypeChartSetting} 
                        dataKeyYAxis='jobtype'
                        dataKeySeries='revenue'
                    />
                </div>
            </div>
        </div>
    )
}

export default Home