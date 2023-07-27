import { makeStyles, Container, Avatar, Typography, Link, Divider } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

const useStyles= makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: "0",
  },
  title: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#555'
  }, 
  imageList: {
    left: 'auto',
    right: '0%',
    transform: 'translateX(0%)',
    top: '0%'
  },
  link: {
    fontSize: '16px',
    color: '#555',
    marginRight: '10px'
  }
}))

function Leftbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography gutterBottom className={classes.title}>کاربران آنلاین</Typography>
      <AvatarGroup max={5} style={{marginBottom: '20px', overflow:'hidden'}}>
        <Avatar alt="مجید" src="https://www.jowhareh.com/images/Jowhareh/galleries_2/poster_df39afa8-9961-43ce-bdae-25592b901c72.webp" />
        <Avatar alt="سارا" src="https://iranbanou.com/wp-content/uploads/2020/01/profil20iranbanou.com02081-2.jpg" />
        <Avatar alt="رضا" src="data:image/jpeg;base64,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" />
        <Avatar alt="قاسم" src="https://doodoops.com/wp-content/uploads/2022/05/%D8%B9%DA%A9%D8%B3-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-%D9%BE%D8%B3%D8%B1%D8%A7%D9%86%D9%87-%D9%85%D8%BA%D8%B1%D9%88%D8%B1_034-600x731.jpg" />
        <Avatar alt="شهلا" src="https://i1.delgarm.com/i/798/0102/17/%D8%B9%DA%A9%D8%B3%20%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84%20%D8%AF%D8%AE%D8%AA%D8%B1%D9%88%D9%86%D9%87/62760e15933db.jpeg" />
      </AvatarGroup>
      <Typography gutterBottom className={classes.title}>گالری</Typography>
      <ImageList rowHeight={100} style={{marginBottom: '20px'}} cols={3}>
      
      <ImageListItem>
      <img src='https://setare.com/files/1399/09/01/%D8%B9%DA%A9%D8%B3-%DA%AF%D9%84.jpg' alt='' className={classes.imageList}/>
      </ImageListItem>
      <ImageListItem>
      <img src='https://files.tanama.ir/img/3099-104/%D8%B9%DA%A9%D8%B3-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84.jpg' alt='' className={classes.imageList}/>
      </ImageListItem>
      <ImageListItem>
      <img src='https://elanet.ir/wp-content/uploads/2022/11/aks-porofail-11.jpg' alt='' className={classes.imageList}/>
      </ImageListItem>
      <ImageListItem>
      <img src='https://fs.noorgram.ir/pic/2022/5/%D8%B9%DA%A9%D8%B3%20%DA%AF%D9%84%20%D8%A8%D9%86%D9%81%D8%B4.jpg' alt='' className={classes.imageList}/>
      </ImageListItem>
      <ImageListItem>
      <img src='https://static2.mosalasonline.com/thumbnail/Snr4ZFBMYJAc/QFpbKTBJgr2mhgj4xINHa7okrg9bgOAsE_H2C0hJSASojHBLdmOPjsVmA-yVmeon1hSQbmcNt81n8iDngPC4OB9Kx2jlHkW0/1695386802-talab-org.jpg' alt='' className={classes.imageList}/>
      </ImageListItem>
      <ImageListItem>
      <img src='https://jadvalyab.ir/blog/wp-content/uploads/2020/12/%D8%B9%DA%A9%D8%B3-%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-%D9%85%D8%B9%D9%86%D9%88%DB%8C.jpg' alt='' className={classes.imageList}/>
      </ImageListItem>
      <ImageListItem>
      <img src='https://arga-mag.com/file/img/2020/05/Boy-profile-picture-60.jpg' alt='' className={classes.imageList}/>
      </ImageListItem>
      <ImageListItem>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhYpHq3z0DCgH3zZSwoG9iutOkmf3pkRXrg&usqp=CAU' alt='' className={classes.imageList}/>
      </ImageListItem>
      <ImageListItem>
      <img src='https://doodoops.com/wp-content/uploads/2021/11/%D9%BE%D8%B1%D9%88%D9%81%D8%A7%DB%8C%D9%84-%D9%BE%D8%B3%D8%B1%D8%A7%D9%86%D9%87_132-560x560.jpg' alt='' className={classes.imageList}/>
      </ImageListItem>
      </ImageList>
      <Typography gutterBottom className={classes.title}>لینک‌های مهم</Typography>
      <Link component='button' href='' className={classes.link} variant='body2'>مقالات علمی</Link>
      <Divider />
      <Link component='button' href='' className={classes.link} variant='body2'>وضعیت سهام</Link>
      <Divider />
      <Link component='button' href='' className={classes.link} variant='body2'>آخرین ارسال‌ها</Link>
      <Divider />
      <Link component='button' href='' className={classes.link} variant='body2'>بررسی منابع</Link>
      <Divider />
      <Link component='button' href='' className={classes.link} variant='body2'>صدور آمار</Link>
      <Divider />
    </Container>
  );
}

export default Leftbar;