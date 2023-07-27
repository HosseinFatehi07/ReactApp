import {
    makeStyles,
    Tooltip,
    Fab,
    Modal,
    Container,
    TextField,
    MenuItem,
    RadioGroup,
    FormControlLabel,
    Radio,
    FormLabel,
    Button,
    FormControl,
    InputLabel,
    Select
  } from "@material-ui/core";
  import { Add as AddIcon } from "@material-ui/icons";
  import { useState } from "react";


const useStyles= makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom:"10px",
        right: "10px"
    },
    container:{
        width: 500,
        height: 570,
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        [theme.breakpoints.down("sm")]:{
          width: "100vw",
          height: "100vh"
        }
      },
      form :{
        padding: theme.spacing(2)
      },
      item: {
        marginBottom: theme.spacing(4)
      },
      select: {
        width: "100%"
      },
      label: {
        display: 'block',
        width: '95%',
        transformOrigin: 'top right'
      }
}))

function Add() {
  const classes = useStyles();
  const [open,setopen]=useState(false);
  return (
    <>
    <Tooltip title="افزودن پست" aria-label="add" onClick={()=>setopen(true)}>
        <Fab color="primary" className={classes.fab}>
          <AddIcon />
        </Fab>
    </Tooltip>
    <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete="off">
            <div className={classes.item}>
              <TextField
                placeholder="عنوان"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                label="پیام شما"
                multiline
                rows={4}
                variant="outlined"
                style={{ width: "100%" }}
              />
            </div>
            <div className={classes.item}>
              <FormControl className={classes.select}>
              <InputLabel htmlFor="filled-age-native-simple" className={classes.label}>نوع نمایش</InputLabel>
                <Select>
                <MenuItem value="public">عمومی</MenuItem>
                <MenuItem value="private">خصوصی</MenuItem>
                <MenuItem value="friend">نمایش برای دوستان</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.item}>
            <FormLabel component="legend">دسترسی کامنت گذاری؟</FormLabel>
            <RadioGroup>
              <FormControlLabel
                value="everybody"
                control={<Radio size="small" />}
                label="برای همه"
              />
              <FormControlLabel
                value="friend"
                control={<Radio size="small" />}
                label="برای دوستان"
              />
               <FormControlLabel
                value="nobody"
                control={<Radio size="small" />}
                label="هیچکس"
              />
              <FormControlLabel
                value="ُسفارشی"
                disabled
                control={<Radio size="small" />}
                label="سفارشی (کاربران ویژه)"
              />
            </RadioGroup>
            </div>
            <div className={classes.item}>
              <Button variant="outlined" color="primary" style={{ marginLeft: "10px" }}>
                ارسال
              </Button>
              <Button variant="outlined" color="secondary" onClick={()=> setopen(false)}>
                انصراف
              </Button>
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
}

export default Add;