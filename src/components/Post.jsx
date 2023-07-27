import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles } from '@material-ui/core';

const useStyles= makeStyles((theme) => ({
  media: {
    height: "250px",
    [theme.breakpoints.down('sm')]:{
        height: 150
    }
  },
  card: {
    marginBottom: theme.spacing(4)
  }
}))

function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardActionArea>
            <CardMedia 
            className={classes.media}
            image='https://cdn.asriran.com/files/fa/news/1402/1/29/1558604_461.jpg'
            title='خورشید'
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>خورشید، ستاره محبوب</Typography>
                <Typography variant='body2'>میدان مغناطیسی خورشید از طریق باد خورشیدی در سراسر منظومه شمسی گسترش می‌یابد. ارتباط و فعل و انفعالات بین خورشید و زمین باعث ایجاد فصول، جریان‌های اقیانوس، تغییرات آب و هوا، کمربندهای تابشی و شفق‌های قطبی می‌شود. گرچه خورشید برای زمین و منظومه شمسی خاص است اما میلیاردها ستاره مانند خورشید در کهکشان راه شیری پراکنده شده‌اند.</Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary'>بیشتر بخوانید</Button>
                <Button size='small' color='primary'>اشتراک گذاری</Button>
            </CardActions>
        </CardActionArea>
    </Card>
  );
}

export default Post;