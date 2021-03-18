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
            {selectedWidgets.length > 0 ? (
                <Grid container justify="center" spacing={4} className={classes.grid}>
                    {selectedWidgets.map((value) => (
                        <Grid key={value} item xs={4}>
                            <Paper>{value}</Paper>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <div className={styles.noWidgetContainer}>
                    <div className={styles.message}>Your focus page is empty</div>
                    <div className={styles.addWidget}>
                        <SelectedWidgetsModal
                            selectedWidgets={selectedWidgets}
                            setSelectedWidgets={setSelectedWidgets}
                        />
                    </div>
                </div>
            )}
            <Grid container spacing={2} className={classes.grid}></Grid>
        </div>
    );
}

export default Body;
