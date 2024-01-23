function maxProfit(prices: number[]): number {
    let profit = 0;
    prices.forEach((ele: number, idx: number) => {
        const dailyProfit = prices[idx] - prices[idx - 1] 
        if( idx !== 0 && dailyProfit > 0){
            profit += dailyProfit;
        }
    });
    return profit;
};