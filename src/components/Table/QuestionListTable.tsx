import React from 'react'
import { QuestionDifficulty } from '../../enums/question';
import DataTable from './DataTable';
import { GridColDef } from '@mui/x-data-grid/models/colDef/gridColDef';

export interface Question {
  id: number,
  title: string,
  difficulty: string,
  category: string
}

interface QuestionListTableProps {
  questionList: Question[]
}

const handleDelete = (id: number) => {
  console.log("Delete item with id: ", id);
}

const handleEdit = (id: number) => {
  console.log("Edit item with id: ", id);
}

const SetColorDifficultyText = (difficulty: string | number) => {
  switch (difficulty) {
    case QuestionDifficulty.EASY:
      return "green";
    case QuestionDifficulty.MEDIUM:
      return "orange";
    case QuestionDifficulty.HARD:
      return "red";
    default:
      return "black";
  }
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1, headerAlign: 'center', align: 'center' },
  { field: 'title', headerName: 'Title', flex: 4, headerAlign: 'left', align: 'left' },
  {
    field: 'difficulty',
    headerName: 'Difficulty',
    flex: 1, headerAlign: 'center',
    align: 'center',
    renderCell: (params) => (
      <span style={{ color: SetColorDifficultyText(params.value) }}>
        {params.value}
      </span>
    ),
  },
  { field: 'category', headerName: 'Category', flex: 1, headerAlign: 'center', align: 'center' },
];

export const QuestionListTable: React.FC<QuestionListTableProps> = ({ questionList }) => {
  return (
    <DataTable columns={columns} rows={questionList} onEditItem={handleEdit} onDeleteItem={handleDelete} />
  )
}
