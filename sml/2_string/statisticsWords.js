/** Thống kê số lượng từ trong câu */
export function statisticsWords(str) {
  if (str === "") return {};

  // const statistics = {};
  // str
  //   .split(" ")
  //   .forEach((element) => {
  //     if (statistics[element]) {
  //       statistics[element] += 1;
  //     } else {
  //       statistics[element] = 1;
  //     }
  //   });

  return str.split(" ").reduce((statistics, word) => {
    statistics[word] =
      statistics[word] !== undefined ? statistics[word] + 1 : 1;

    return statistics;
  }, {});
}
// console.log(statisticsWords("easy frontend is very easy"));
