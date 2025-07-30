export type Condition = 'more' | 'less';

export interface GameResult {
    result: number;
    isWin: boolean;
    time: string;
    guess: string;
}
