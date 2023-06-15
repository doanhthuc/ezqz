import Typography from '@mui/material/Typography';
import React from 'react'
import { QuestionDifficulty } from '../../enums/question';
import CommonTable, { TableColumn } from './CommonTable';

interface Question {
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

const StyledDifficultyText = (difficulty: string | number) => {
  return (
    <Typography variant="body1" style={{ color: SetColorDifficultyText(difficulty) }}>
      {difficulty}
    </Typography>
  );
}

const columns: TableColumn<Question>[] = [
  { header: "ID", accessor: "id", align: "center", styling: { width: 40, height: 72 } },
  { header: "Title", accessor: "title", align: "left", styling: { width: 700 } },
  {
    header: "Difficulty", accessor: "difficulty", align: "center", formatValue: StyledDifficultyText, styling: {
      width: 160
    }
  },
  { header: "Category", accessor: "category", align: "center", styling: { width: 100 } },
]

export const QuestionListTable: React.FC<QuestionListTableProps> = ({ questionList }) => {
  const styling = { maxHeight: (questionList.length - 2 + 1) * 72, overflow: "hidden", maxWidth: 1000 };
  return (
    <CommonTable columns={columns} data={questionList} onEditItem={handleEdit} onDeleteItem={handleDelete} styling={styling} />
  )
}
