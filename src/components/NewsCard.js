import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import moment from 'moment';

export default function NewsCard({img,title,summary,date,link}) {

    

    return (
        <Card sx={{ minWidth: 226 }} style={{height:"400px"}}>
            <CardMedia
                component="img"
                alt={title}
                height="140"
                image={img}
            />
            <CardContent style={{paddingBottom:"8px"}}>
                <Typography variant="body2">
                    {moment(date).startOf('ss').fromNow()}
                </Typography>
                <Typography variant="h6" component="div" style={{height:"65px",overflowY:"auto"}}>
                    {title}
                </Typography>
                <Typography variant="body2" paragraph color="text.secondary" style={{ height: "82px", overflowY: "auto" }}>
                    {summary?.length>100?`${summary.substring(0,150)}...........`:summary}
                </Typography>
            </CardContent>
            <CardActions style={{justifyContent:"center",marginBottom:"10px"}}>
                <Button size="small" variant="contained" color="primary" onClick={()=>window.open(link,'_blank')}>Original Link</Button>
            </CardActions>
        </Card>
    );
}