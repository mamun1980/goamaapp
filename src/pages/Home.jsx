import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import NavBar from '../components/NavBar'
import ChartCard from "../components/ChartCard";


export default function Home() {
    

  return (
        <div>
            <NavBar />
            <Grid container spacing={2}>
            <Grid item xs={2}>
                
            </Grid>
                <Grid item xs={8}>
                    <ChartCard  />
                </Grid>
            </Grid>
            
        </div>
    )
}
