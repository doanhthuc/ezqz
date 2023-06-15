import Box from '@mui/material/Box'
import React, { useState } from 'react'
import MockQuestionData from '../MockQuestionData'
import { QuestionListTable } from '../components/Table/QuestionListTable'
import FilterSelect, { SelectOption } from '../components/Select/FilterSelect'
import SearchInput from '../components/Input/SearchInput'
import Pagination from '@mui/material/Pagination'

const QuestionListWrapper = () => {

  const mockQuestionData = MockQuestionData

  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');

  const difficultyOptions: SelectOption<string, string>[] = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' },
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

  return (
    <div style={{
      boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h1>Question List</h1>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 1000,
      }}>
        <div>
          <FilterSelect label="Difficulty" options={difficultyOptions} value={selectedDifficulty} onChange={handleDifficultyChange} />
          <FilterSelect label="Category" options={categoryOptions} value={selectedCategory} onChange={handleCategoryChange} />
        </div>
        <SearchInput value={searchValue} onChange={handleSearchChange} placeholder='Search question' />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 1000,
      }}>
        <QuestionListTable questionList={mockQuestionData} />
        <Pagination count={10} variant="outlined" shape="rounded" onChange={handlePageChange} sx={{ padding: 6 }} />
      </Box>
    </div>
  )
}

export default QuestionListWrapper