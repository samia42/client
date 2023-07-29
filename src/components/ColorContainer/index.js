import { Button, Grid, IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { AddCircle, Delete } from '@mui/icons-material';

const ColorContainer = () => {

    const [colors, setColors] = useState([{ name: '' }]);
    const [tones, setTones] = useState([{ value: '', shades: [] }])


    const addColor = () => {
        const lastValue = colors[colors.length - 1].name
        if (lastValue === '') {
            alert('add Color first')
            return
        }
        setColors([...colors, { name: '' }]);
    };

    const addTone = () => {
        const shadesArr = colors.map(() => 'hey')
        // console.log(shadesArr, 'arr')
        // console.log(tones, 'tones')

        const lastValue = tones[tones.length - 1].value
        if (lastValue === '') {
            alert('add Tone first')
            return
        }
        setTones([...tones, { value: '', shades: [...shadesArr] }]);
    };

    const removeColor = (index) => {
        const updatedColors = [...colors];
        updatedColors.splice(index, 1);
        setColors(updatedColors);
    };

    const removeTone = (index) => {
        const updatedTones = [...tones];
        updatedTones.splice(index, 1);
        setTones(updatedTones);
    };

    const handleColorNameChange = (index, event) => {
        const updatedColors = [...colors];
        updatedColors[index].name = event.target.value;
        setColors(updatedColors);
    };

    const handleToneChange = (index, event) => {
        const updatedTones = [...tones];
        updatedTones[index].value = event.target.value;
        setTones(updatedTones);
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.values)
        addTone()
    }
    return (
        <>
            <form onSubmit={handleSubmit}>


                <Grid container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Button sx={{ marginRight: '110px' }} onClick={addColor} startIcon={<AddCircle />}>
                        Add Color
                    </Button>
                    {colors.map((color, colorIndex) => (
                        <Grid item key={colorIndex}>
                            <div style={{ display: 'flex', alignItems: 'center', margin: '10px', justifyContent: 'space-evenly', maxWidth: '200px' }}>
                                <TextField
                                    name='color'
                                    required
                                    size='small'
                                    label="Color Name"
                                    value={color.name}
                                    onChange={(event) => handleColorNameChange(colorIndex, event)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => removeColor(colorIndex)}
                                                    disabled={colors.length === 1}
                                                >
                                                    <Delete />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />

                            </div>
                        </Grid>
                    ))}
                </Grid>
                <Grid conatiner sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flexDirection: 'column' }}>
                    {tones.map((tone, toneIndex) => (
                        <Grid item key={toneIndex}>
                            <div key={toneIndex} style={{ display: 'flex', alignItems: 'center', margin: '10px', justifyContent: 'space-evenly' }}>
                                <TextField
                                    required
                                    name='tone'
                                    size='small'
                                    label={`Tone ${toneIndex + 1}`}
                                    value={tone.value}
                                    onChange={(event) => handleToneChange(toneIndex, event)}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={() => removeTone(toneIndex)}
                                                    disabled={tones.length === 1}
                                                >
                                                    <Delete />
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {colors.map((i) => <input type='file' name={i + 'shade'} required />)}
                            </div>
                            {/* {tone?.shades?.map((shade, shadeIndex) => (
                            <Grid item key={shadeIndex}>
                                <div key={shadeIndex} >
                                    {shade.name}
                                </div>
                            </Grid>
                        ))} */}
                        </Grid>
                    ))}


                </Grid>
                <Button startIcon={<AddCircle />} type='submit'>
                    Add Tone
                </Button>
            </form>
        </>
    )
}

export default ColorContainer