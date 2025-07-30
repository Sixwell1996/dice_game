'use client';
import DiceForm from '../components/DiceForm';
import DiceResult from '../components/DiceResult';
import GameHistory from '../components/GameHistory';
import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import { GameResult, Condition } from '@/types';
import { rollDice } from '@/utils/dice';

export default function DiceGame() {
  const [threshold, setThreshold] = useState<number | ''>('');
  const [condition, setCondition] = useState<Condition>('more');
  const [result, setResult] = useState<number | null>(null);
  const [isWin, setIsWin] = useState<boolean | null>(null);
  const [history, setHistory] = useState<GameResult[]>([]);

  const handlePlay = () => {
    if (threshold === '') return;
    const roll = rollDice();
    const win = condition === 'more' ? roll > threshold : roll < threshold;
    const time = new Date().toLocaleTimeString();
    const guess = `${condition === 'more' ? 'Over' : 'Under'} ${threshold}`;

    setResult(roll);
    setIsWin(win);

    const newEntry: GameResult = {
      result: roll,
      isWin: win,
      time,
      guess,
    };

    setHistory(prev => [newEntry, ...prev].slice(0, 10));
  };

  return (
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>Dice Game</Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <DiceResult result={result} isWin={isWin} />
          <DiceForm threshold={threshold} setThreshold={setThreshold} condition={condition} setCondition={setCondition} onPlay={handlePlay} />
          <GameHistory history={history} />
        </Box>
      </Container>
  );
}
