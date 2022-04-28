import React, { useState, useEffect } from "react";
import { ResponsiveContainer, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, Area, ComposedChart} from "recharts";
import { Spinner, Stack, Col } from 'react-bootstrap'
import ToolTipLabels from "./ToolTipLabels";
import ToolTipTitle from "./ToolTipTitle"


function CourseLineChart(){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])


    const formatData = (rawData) => {
        return {
            "yearMonth": rawData['yearMonth'],
            "Deposits": rawData['totalDeposit'],
            "Bottom10%": rawData["expectedAmounts"]['10'],
            "Median": rawData["expectedAmounts"]["50"],
            "Top25%": rawData["expectedAmounts"]["75"],
            "2.5%": rawData["expectedAmounts"]["benchmark"],
            "underperforming" : rawData["chanceOfUnderPerformingBenchmark"],
            "IQR":[
                rawData["expectedAmounts"]['10'],
                rawData["expectedAmounts"]["75"]
            ]
        }
    }

    useEffect(() => {
        fetch("http://www.mocky.io/v2/5e69de892d00007a005f9e29?mocky-delay=2000ms")
        .then(response => response.json())
        .then(json => {
            const formattedData = json.map(element => formatData(element))
            setData(formattedData)
            setLoading(false)
        })
    },[])
    
    const formatter = (v) => {
        return `S$${(v/1000000).toFixed(2)}m`
    }

    // CustomToolTip component, combines ToolTipLabels and ToolTipTitle components
    const CustomToolTip = ({ active, payload, label}) => {
        if (active && payload && payload.length) {
            return (
                <div className='custom-tooltip' style={{backgroundColor:'#e7f4ff', padding: 15, borderRadius: 5, opacity: 0.9, width:350}}>
                    
                    {/* yearMonth */}
                    <h4>{`${label}`}</h4>
                    <hr/>

                    <ToolTipTitle/>

                        <ToolTipLabels label='Top 25%' value={`S$${payload[0].value[1].toLocaleString('en-us')}`} dotColor="#7ac0ff" special={false}/>
                    
                        <ToolTipLabels label='Median' fontColor="blue" value={`S$${payload[2].value.toLocaleString('en-us')}`} dotColor="blue" special={false}/>
                    
                        <ToolTipLabels label='Bottom 10%' value={`S$${payload[0].value[0].toLocaleString('en-us')}`} dotColor="#7ac0ff" special={false}/>
                    
                        <ToolTipLabels label='Underperforming 2.5% p.a.' value={`${(payload[6].value*100).toFixed(1)}%`} special={true}/>
                    
                    <br/>
                    <hr/>
                    
                        <ToolTipLabels label='2.5% p.a.' value={`S$${payload[4].value.toLocaleString('en-us')}`} dotColor="orange" special={false}/>
                
                        <ToolTipLabels label='Deposits' value={`S$${payload[5].value.toLocaleString('en-us')}`} dotColor="black" special={false}/>
                </div>
            );
        }
        
    } 


    return loading ? (
    
        <Stack gap={2} className="col-md-5 mx-auto">
            <Spinner animation="border" variant="primary" role="status" size="lg" className="mx-auto">
            </Spinner>
            <p className="mx-auto">Loading Your Data, Please be Patient...</p>
        </Stack>
        
        ) : (
        
        <React.Fragment>
        <ResponsiveContainer width="90%" height="90%" aspect={1} className="mx-auto" >

        <ComposedChart width={730} height={250} data={data} margin={{left:50, right:50, top:100, bottom:100}}>

            {/* customise tooltip */}
            <Tooltip content={<CustomToolTip/>} />

            {/* X and Y axis*/}
            <XAxis dataKey="yearMonth" interval="preserveStartEnd" />
            <YAxis tickFormatter={formatter}/>
            
            
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            
            {/* Area chart */}
            <Area type="monotone" name="Range (10th-75th Percentile)" dataKey="IQR" fill="#cde7ff" stroke="#7ac0ff" />
            
            {/* Line charts */}
            <Line name="Top 25%" dataKey="Top25%" stroke="#7896b7" type="monotone" dot={false}/>
            
            <Line name="Median"dataKey="Median" stroke="blue" type="monotone" dot=
            {false}/>
            
            <Line name="Bottom 10%" dataKey="Bottom10%" stroke="#7896b7"  type="monotone" dot={false}/>
            
            <Line name="2.5% p.a." dataKey="2.5%" stroke="orange" type="monotone" dot={false}/>
            
            <Line name="Deposits" dataKey="Deposits" stroke="black"  type="monotone" dot={false}/>

            <Line name="Underperforming 2.5% p.a." dataKey="underperforming" stroke="black"  type="monotone" dot={false}/>
            

        </ComposedChart>


        </ResponsiveContainer>
        </React.Fragment>
    
    );
};

export default CourseLineChart