import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../api'
import { Line, Bar } from 'react-chartjs-2'

const Charts = (props) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await fetchDailyData()
      if (res) setData(res)
    }

    getData()
  }, [])

  const dailyData = data
  const linechart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
        ],
      }}
    />
  ) : null

  const {
    data: { confirmed, recovered, deaths },
    country,
  } = props
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ['Infected', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, 0.5)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Curent state in ${country}` },
      }}
    />
  ) : null

  return (
    <div className='container mt-5 pb-5'>
      <div className='row'>
        <div className='col-md-8 m-auto'>{country ? barChart : linechart}</div>
      </div>
    </div>
  )
}

export default Charts
