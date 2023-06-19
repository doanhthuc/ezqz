import React from 'react';
import classes from './ManageQuestion.module.scss';
import Card from '../components/Card/Card';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';

const ManageQuestionPage: React.FC = () => {
    return (
        <Container className={classes.container}>
            <Grid container spacing={0.25}>
                <Grid item xs={12} container justifyContent="center" alignItems="center">
                    <div className={classes.title}>Manage Question</div>
                </Grid>
                <Grid item xs={12}>
                    <Card header="List question">
                        <div>Question 1</div>
                        <div>Question 2</div>
                        <div>Question 1</div>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};
export default ManageQuestionPage;
