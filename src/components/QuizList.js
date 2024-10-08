import React from 'react';
import { List, ListItem, ListItemText, Button } from '@mui/material';
import axios from 'axios';

const QuizList = ({ quizzes, onQuizDeleted, onQuizSelect }) => {
    const handleDelete = async (quizId) => {
        try {
            await axios.delete(`https://be-asm2.onrender.com/quizzes/${quizId}`);
            onQuizDeleted(quizId); // Notify parent component of the deleted quiz
        } catch (error) {
            console.error('Error deleting quiz:', error);
        }
    };

    return (
        <div>
            <h2>Quiz List</h2>
            <List>
                {quizzes.map((quiz) => (
                    <ListItem key={quiz._id} onClick={() => onQuizSelect(quiz)} style={{
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        padding: '10px', // Khoảng cách bên trong
                        margin: '10px 0', // Khoảng cách giữa các câu hỏi
                        border: '1px solid #ccc', // Đường viền khung
                        borderRadius: '5px', // Bo góc
                        backgroundColor: '#f9f9f9', // Màu nền
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 

                       
                    }}>
                        <ListItemText primary={quiz.title}  />
                        <Button onClick={() => handleDelete(quiz._id)} color="secondary">
                            Delete
                        </Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default QuizList;
