import React, { Component } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  StylesProvider,
} from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
const Cards = ({ data: { confirmed, lastUpdate, recovered, deaths } }) => {
  console.log(lastUpdate);
  if (!confirmed) {
    return "loading...";
  }

  return (
    <div className={StylesProvider.container}>
      <Typography variant="h5" className={cx(styles.iswag)}>
        COVID-19 Cases in the Philippines
      </Typography>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={4}>
          <CardContent>
            <Typography color="TextSecondary" gutterBottom>
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="TextSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography color="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="TextSecondary" gutterBottom>
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="TextSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography color="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card}>
          <CardContent>
            <Typography color="TextSecondary" gutterBottom>
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={3}
                separator=","
              />
            </Typography>
            <Typography color="TextSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography color="body2">
              Number of active cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
