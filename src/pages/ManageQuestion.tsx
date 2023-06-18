import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2'
import React, { useState } from 'react'
import FilterSelect, { SelectOption } from '../components/Select/FilterSelect'
import SearchInput from '../components/Input/SearchInput'
import MockQuestionData from '../MockQuestionData'
import { Question, QuestionListTable } from '../components/Table/QuestionListTable'
import Pagination from '@mui/material/Pagination'
import { QuestionDifficulty } from '../enums/question'
import Button from '@mui/material/Button'

const ManageQuestionTable = () => {
    const mockQuestionData: Question[] = MockQuestionData

    const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [searchValue, setSearchValue] = useState<string>('');

    const difficultyOptions: SelectOption<string, string>[] = [
        { value: QuestionDifficulty.EASY, label: 'Easy' },
        { value: QuestionDifficulty.MEDIUM, label: 'Medium' },
        { value: QuestionDifficulty.HARD, label: 'Hard' },
    ];

    const categoryOptions: SelectOption<string, string>[] = [
        { value: 'Fun fact', label: 'Fun fact' },
        { value: 'Typescript', label: 'Java' },
        { value: 'Javascript', label: 'Javascript' },
        { value: 'Spring', label: 'Spring' },
    ];

    const handleDifficultyChange = (value: string) => {
        console.log("Selected difficulty value: ", value);
        setSelectedDifficulty(value);
    };

    const handleCategoryChange = (value: string) => {
        console.log("Selected category value: ", value);
        setSelectedCategory(value);
    };

    const handleSearchChange = (value: string) => {
        console.log("Search value: ", value);
        setSearchValue(value);
        // Perform search or other operations with the updated value
    };

    const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
        console.log("Page: ", page);
    };

    const onCreateQuestionClick = () => {
        console.log("Create question clicked");
    }

    return (
        <Grid container justifyContent="center" alignItems="center" direction="column">
            <Grid container xs={10} display="flex" justifyContent="center" direction="column" margin={8} border="1px solid #c8c8c8" borderRadius={6} padding={5} boxShadow="2px 3px 0px 0px rgba(0,0,0,0.26)" >
                <Typography variant="h3" component="h3" margin="auto">
                    Question List
                </Typography>
                <Grid xs={12} display="flex" justifyContent="space-between" direction="row" alignItems="center">
                    <Box>
                        <FilterSelect label="Difficulty" options={difficultyOptions} value={selectedDifficulty} onChange={handleDifficultyChange} />
                        <FilterSelect label="Category" options={categoryOptions} value={selectedCategory} onChange={handleCategoryChange} />
                    </Box>
                    <SearchInput value={searchValue} onChange={handleSearchChange} placeholder='Search question' />
                </Grid>
                <Grid marginTop={2} xs={12} display="flex" justifyContent="flex-end">
                    <Button variant="contained" onClick={onCreateQuestionClick}>Create</Button>
                </Grid>
                <Grid xs={12} marginTop={4}>
                    <QuestionListTable questionList={mockQuestionData} />
                </Grid>
                <Grid xs={12} marginTop={4} display="flex" justifyContent="center" alignItems="center" >
                    <Pagination count={10} variant="outlined" shape="rounded" onChange={handlePageChange} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ManageQuestionTable