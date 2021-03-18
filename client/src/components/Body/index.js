<<<<<<< HEAD
import { Grid, Paper, makeStyles } from "@material-ui/core";
import SelectedWidgetsModal from "../SelectWidgetsModal";
import styles from "./style.module.scss";
import createPersistedState from "use-persisted-state";
// import { useEffect } from "react";

const useWidgetState = createPersistedState("selectedWidgets");

const useStyles = makeStyles({
    grid: {
        width: "80%",
    },
    label: {
        textTransform: "capitalize",
        fontSize: "1.25rem",
=======
import { Grid, makeStyles } from "@material-ui/core";
import styles from "./style.module.scss";

const useStyles = makeStyles({
    grid: {
        padding: "20px 200px",
>>>>>>> 9deb998... Added styling to format grid item placement
    },
});

function Body() {
<<<<<<< HEAD
    const [selectedWidgets, setSelectedWidgets] = useWidgetState([]);

    // useEffect(() => {
    //     setSelectedWidgets(["To Do List", "Calander"]);
    //     // eslint-disable-next-line
    // }, []);

=======
>>>>>>> 9deb998... Added styling to format grid item placement
    const classes = useStyles();

    return (
        <div className={styles.gridContainer}>
<<<<<<< HEAD
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
=======
            <Grid container spacing={2} className={classes.grid}></Grid>
>>>>>>> 9deb998... Added styling to format grid item placement
        </div>
    );
}

export default Body;
