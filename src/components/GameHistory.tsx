import { Table, TableHead, TableRow, TableCell, TableBody, Typography, Box } from '@mui/material';
import { GameResult } from '@/types';

interface GameHistoryProps {
    history: GameResult[];
}

export default function GameHistory({ history }: GameHistoryProps) {

    return (
        <Box mt={4}>
            <Typography variant="h6" gutterBottom>Game history:</Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Time</TableCell>
                        <TableCell>Guess</TableCell>
                        <TableCell>Result</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {history.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{item.time}</TableCell>
                                <TableCell>{item.guess}</TableCell>
                                <TableCell sx={{ color: item.isWin ? 'green' : 'red' }}>{item.result}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Box>
    );
}
