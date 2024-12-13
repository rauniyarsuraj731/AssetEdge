import { Box } from "@mui/material";
import { Col, Row } from "antd";
import React from "react";
import StatCard from "./StatCard";
import { CalendarMonthOutlined, TodayOutlined, UpdateOutlined } from "@mui/icons-material";

const StatCards = () => {
    const data = [
        {
            count:20,
            title: 'Request For the Day',
            icon: <TodayOutlined sx={{color:'#37B400',width:'33.33px',height:'30px'}}/>,
            colorToShow: '#d8efcd'

        },
        {
            count:10,
            title: 'Pending Requests',
            icon:<UpdateOutlined sx={{color:'#e6c867',width:'33.33px',height:'30px'}}/>,
            colorToShow: '#E9B00233'
        },
        {
            count:150,
            title: 'Requests for this Month',
            icon:<CalendarMonthOutlined sx={{color:'#007AFB',width:'33.33px',height:'30px'}} />,
            colorToShow: '#007AFB33'
        }
    ]
  return (
    <Box sx={{mt: 5}}>
      <Row style={{display:'flex',justifyContent:'space-around'}}>
        {data?.map((x)=>(
        <Col
          xs={{ span: 2, offset: 1 }}
          lg={{ span: 7, offset: 1 }}
        >
          <StatCard statData={x}/>
        </Col>))
        }
      </Row>
    </Box>
  );
};

export default StatCards;
