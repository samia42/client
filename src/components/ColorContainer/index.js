import React, { useState } from 'react';
import {
    Grid,
    Button,
    IconButton,
    InputAdornment,
    TextField,
} from '@mui/material';
import { AddCircle, Delete } from '@mui/icons-material';

const ColorContainer = () => {
    const [rows, setRows] = useState(0);
    const [cols, setCols] = useState(0);
    const [matrix, setMatrix] = useState([]);
    const [tones, setTones] = useState(Array(cols).fill(''));
    const [colors, setColors] = useState(Array(rows).fill(''));

    const handleMatrixChange = (rowIndex, colIndex, file) => {
        const updatedMatrix = [...matrix];
        updatedMatrix[rowIndex][colIndex] = { colors: colors[rowIndex], tones: tones[colIndex], file: file };
        setMatrix(updatedMatrix);
        console.log('all data structured', matrix)
    };

    const handleToneChange = (colIndex, value) => {
        const updatedTones = [...tones];
        updatedTones[colIndex] = value;
        setTones(updatedTones);
    };

    const handleColorChange = (rowIndex, value) => {
        const updatedColors = [...colors];
        updatedColors[rowIndex] = value;
        setColors(updatedColors);
    };

    const handleAddRow = () => {
        const newRow = Array(cols).fill({ file: null, tone: '', color: '' });
        setMatrix([...matrix, newRow]);
        setColors([...colors, '']);
        setRows(rows + 1);
    };

    const handleDeleteRow = (rowIndex) => {
        const updatedMatrix = [...matrix];
        updatedMatrix.splice(rowIndex, 1);
        setMatrix(updatedMatrix);
        const updatedColors = [...colors];
        updatedColors.splice(rowIndex, 1);
        setColors(updatedColors);
        setRows(rows - 1);
    };

    const handleAddColumn = () => {
        const updatedMatrix = matrix.map((row) => [
            ...row,
            { file: null, tone: '', color: '' },
        ]);
        setMatrix(updatedMatrix);
        setTones([...tones, '']);
        setCols(cols + 1);
    };

    const handleDeleteColumn = (colIndex) => {
        const updatedMatrix = matrix.map((row) => {
            const newRow = [...row];
            newRow.splice(colIndex, 1);
            return newRow;
        });
        setMatrix(updatedMatrix);
        const updatedTones = [...tones];
        updatedTones.splice(colIndex, 1);
        setTones(updatedTones);
        setCols(cols - 1);
    };

    return (
        <>

            <Grid conatiner sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button variant="outlined" onClick={handleAddColumn}>
                        Add Tone
                    </Button>
                    <Button variant="outlined" onClick={handleAddRow} >
                        Add Color
                    </Button>
                    {matrix.map((row, rowIndex) => (
                        <div style={{ maxWidth: '200px', margin: '10px', }}>
                            <TextField
                                label={`Color ${rowIndex + 1}`}
                                value={colors[rowIndex]}
                                onChange={(event) => handleColorChange(rowIndex, event.target.value)}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton aria-label="delete" onClick={() => handleDeleteRow(rowIndex)}>
                                                <Delete />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </div>

                    ))}
                </div>
                <div>
                    {tones.map((tone, colIndex) => (
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <div key={colIndex} style={{ margin: '10px', maxWidth: '200px', }}>
                                <TextField
                                    label={`Tone ${colIndex + 1}`}
                                    value={tone}
                                    onChange={(event) => handleToneChange(colIndex, event.target.value)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton aria-label="delete" onClick={() => handleDeleteColumn(colIndex)}>
                                                    <Delete />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div>
                            <Grid item key={colIndex}>
                                {colors.map((cell, index) => (
                                    <input
                                        key={index}
                                        type="file"
                                        onChange={(event) => handleMatrixChange(colIndex, index, event.target.files[0])}
                                    />
                                ))}
                            </Grid>
                        </div>
                    ))}


                </div>
            </Grid >
        </>
    );
};

export default ColorContainer;