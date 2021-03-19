import { Grid, Paper, makeStyles } from "@material-ui/core";
import SelectedWidgetsModal from "../SelectWidgetsModal";
import styles from "./style.module.scss";
import createPersistedState from "use-persisted-state";
import { useEffect } from "react";

const useWidgetState = createPersistedState("selectedWidgets");

const useStyles = makeStyles({
    grid: {
        width: "80%",
    },
    label: {
        textTransform: "capitalize",
        fontSize: "1.25rem",
    },
});

function Body() {
    const [selectedWidgets, setSelectedWidgets] = useWidgetState([]);

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
        </div>
    );
}

export default Body;
