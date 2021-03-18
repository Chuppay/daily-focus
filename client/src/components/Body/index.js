import { Grid, makeStyles } from "@material-ui/core";
import styles from "./style.module.scss";

const useStyles = makeStyles({
    grid: {
        padding: "20px 200px",
    },
});

function Body() {
    const classes = useStyles();

    return (
        <div className={styles.gridContainer}>
            <Grid container spacing={2} className={classes.grid}></Grid>
        </div>
    );
}

export default Body;
