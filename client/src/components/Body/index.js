import { Grid, Paper, makeStyles, Button } from "@material-ui/core";
import styles from "./style.module.scss";

const useStyles = makeStyles({
    root: {
        background: "#30A0F5",
        borderRadius: 50,
        padding: "4px 25px",
    },
    grid: {
        padding: "20px 200px",
    },
    label: {
        textTransform: "capitalize",
        fontSize: "1.25rem",
    },
});

function Body(widgets) {
    widgets = null;
    const classes = useStyles();

    return (
        <div className={styles.gridContainer}>
            {widgets ? (
                <Grid container spacing={2} className={classes.grid}>
                    {widgets.map((value) => (
                        <Grid key={value} item>
                            <Paper className={classes.paper} />
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <div className={styles.noWidgetContainer}>
                    <div className={styles.message}>Your focus page is empty</div>
                    <div className={styles.addWidget}>
                        <Button
                            variant="contained"
                            color="primary"
                            classes={{ root: classes.root, label: classes.label }}
                        >
                            Add Widget
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Body;
