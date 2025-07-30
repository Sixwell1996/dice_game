import {Slider, ToggleButtonGroup, ToggleButton, Button, Typography, Box} from '@mui/material';
import {Condition} from '@/types';

interface DiceFormProps {
    threshold: number | '';
    setThreshold: (val: number | '') => void;
    condition: Condition;
    setCondition: (val: Condition) => void;
    onPlay: () => void;
}

export default function DiceForm({threshold, setThreshold, condition, setCondition, onPlay}: DiceFormProps) {

    return (
        <>
            <Slider
                value={threshold as number}
                onChange={(_, value) => setThreshold(Array.isArray(value) ? value[0] : value)}
                min={0}
                max={100}
                valueLabelDisplay="auto"
            />
            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography
                    variant="body2"
                >
                    0
                </Typography>
                <Typography
                    variant="body2"
                >
                    100
                </Typography>
            </Box>
            <ToggleButtonGroup
                value={condition}
                exclusive
                onChange={(_, val) => val && setCondition(val)}
            >
                <ToggleButton value="more">Over</ToggleButton>
                <ToggleButton value="less">Under</ToggleButton>
            </ToggleButtonGroup>
            <Button variant="contained" onClick={onPlay} disabled={!threshold}>Play</Button>
        </>
    );
}
