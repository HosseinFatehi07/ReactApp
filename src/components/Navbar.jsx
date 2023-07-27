import {AppBar,InputBase,makeStyles, Toolbar, Typography,alpha,Badge, Avatar} from "@material-ui/core";
import { Search, Mail,Notifications, Cancel } from "@material-ui/icons";
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.open ? "flex" : "none"),
      width: "60%"
    },
  },
  input: {
    color: "white",
    marginRight: theme.spacing(1),
    width: "100%"
  },
  cancel:{
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
  },
  searchButton:{
    marginLeft: theme.spacing(2),
    display: "none",
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  icon: {
    alignItems: "center",
    display: (props) => (props.open ? "none" : "flex")
  },
  badge: {
    marginLeft: theme.spacing(2)
  },
  avatar: {
    display: 'flex',
    left: '0px'
  },
  icon2: {
    display: 'flex',
    alignItems: "center"
  }
}));

function Navbar() { 
    const [open,setopen]=useState(false);
  const classes = useStyles({open});
  return (
    <div>
        <AppBar>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h6' className={classes.logoLg}>
                    وب اپ ریکت
                </Typography>
                <Typography variant='h6' className={classes.logoSm}>
                    ریکت
                </Typography>
                <div className={classes.search}>
                    <Search />
                    <InputBase className={classes.input} placeholder='جستجو...' />
                    <Cancel className={classes.cancel} onClick={()=>setopen(false)}/>
                </div>
                <div className={classes.icon}>
                <div className={classes.icon2}>
                    <Search className={classes.searchButton} onClick={()=>setopen(true)}/>
                    <Badge badgeContent={5} color="secondary" className={classes.badge}>
                        <Mail />
                    </Badge>
                    <Badge badgeContent={3} color="secondary" className={classes.badge}>
                        <Notifications />
                    </Badge>
                    <Avatar src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className={classes.avatar}></Avatar>
                </div>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  );
}

export default Navbar;