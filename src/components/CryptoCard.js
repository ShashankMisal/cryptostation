
import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';


const useStyles = makeStyles(theme=>({

    card: {
        borderRadius: 12,
        minWidth: 256,
        textAlign: 'center',
        margin: 15
    },
    avatar: {
        width: 75,
        height: 75,
        margin: 'auto',
        border: '2px solid #ffffff'
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        letterSpacing: '0.5px',
        marginTop: 8,
        marginBottom: 0,
    },
    subheader: {
        fontSize: 14,
        color: theme.palette.grey[500],
        marginBottom: '0.875em',
    },
    statLabel: {
        fontSize: theme.spacing(1.5),
        color: theme.palette.grey[500],
        fontWeight: 500,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        margin: 0,
    },
    statValue: {
        fontSize: theme.spacing(2),
        fontWeight: 'bold',
        marginBottom: 4,
        letterSpacing: '1px',
    },
}))

export const CryptoCard = React.memo(function ProfileCard(props) {
    const styles = useStyles();
    const { name, url, designation } = props

    return (
        <Card className={cx(styles.card)} elevation={1}>
            <CardContent>
                <Avatar className={styles.avatar} src={url} />
                <h3 className={styles.heading}>Bitmdosi</h3>
            </CardContent>
            <Divider dark />
            <Box display='flex'>
                <Box p={1.5} flex={'auto'}>
                    <p className={styles.statLabel}>Current Price</p>
                    <p className={styles.statValue}>₹23423</p>
                </Box>

                <Box p={1.5} flex={'auto'}>
                    <p className={styles.statLabel}>Market Cap</p>
                    <p className={styles.statValue}>₹43232</p>
                </Box>
                <Box p={1.5} flex={'auto'}>
                    <p className={styles.statLabel}>Daily Change</p>
                    <p className={styles.statValue}>₹43232</p>
                </Box>
            </Box>
        </Card>
    );
});

export default CryptoCard