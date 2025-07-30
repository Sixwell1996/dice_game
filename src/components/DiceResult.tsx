import {Alert, AlertTitle, Box, Typography} from '@mui/material';

interface DiceResultProps {
    result: number | null;
    isWin: boolean | null;
}

export default function DiceResult({result, isWin}: DiceResultProps) {

    return (
        <>
            {(result !== null || isWin !== null) && <Alert severity={isWin ? 'success' : 'error'}>
                <AlertTitle>{isWin ? 'You won' : 'You lost'}</AlertTitle>
                {isWin ? '' : 'Number was higher'}
            </Alert>}

            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4}}>
                <Typography variant="h1" fontWeight="bold">{result || '0'}</Typography>
            </Box>
        </>
    );
}
