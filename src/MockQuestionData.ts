const createData = (
  id: number,
  title: string,
  difficulty: string,
  category: string,
) => {
  return { id, title, difficulty, category };
}

const MockQuestionData = [
  createData(1, "When was the mgm Danang established?", "easy", "Fun fact"),
  createData(2, "How many data type in typescript?", "medium", "Typescript"),
  createData(3, "What is the difference between a constructor and a method? What is the difference between a constructor and a method? What is the difference between a constructor and a method? What is the difference between a constructor and a method?", "hard", "Java"),
  createData(4, "What is the difference between let and var?", "easy", "Javascript"),
  createData(5, "List out bean scopes in spring framework?", "medium", "Spring"),
  createData(6, "How to implement service discovery in spring boot?", "hard", "Spring"),
  createData(7, "When was the mgm Danang established?", "easy", "Fun fact"),
  createData(8, "How many data type in typescript?", "medium", "Typescript"),
  createData(9, "What is the difference between a constructor and a method?", "hard", "Java"),
  createData(10, "What is the difference between let and var?", "easy", "Javascript"),
  createData(11, "List out bean scopes in spring framework?", "medium", "Spring"),
  createData(12, "How to implement service discovery in spring boot?", "hard", "Spring")
];

export default MockQuestionData;