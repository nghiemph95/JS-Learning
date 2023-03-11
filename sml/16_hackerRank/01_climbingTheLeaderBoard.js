/**
 * Input:
 * Ranked: [100 100 50 40 40 20 10]
 * Player Score: [5 25 50 120]
 *
 * Ouput: [6, 4, 2, 1]
 */

function climbingLeaderboard(ranked, player) {
  // Write your code here
  let values = [...new Set(ranked)]; // [100, 50, 40, 20, 10]
  let rank = values.length - 1; // rank = 4

  return player.reduce((target, item, index) => {
    while (item > values[rank] && rank > 0) rank--;

    target.push(item >= values[rank] ? rank + 1 : rank + 2);
    return target;
  }, []);
}
