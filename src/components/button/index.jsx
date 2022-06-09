import { Button } from "antd";
import classes from  "./style.module.css"
const CustomButton = ({isClicked,type}) => {
  return (
    <>
      <Button type={type}  className={classes.button} htmlType="submit" onClick={(e)=>isClicked(e)
      } >Submit</Button>
    </>
  );
};

export default CustomButton;
