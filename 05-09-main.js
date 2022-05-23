//v1
function checkStudentV1(score) {
  let set;

  if (score > 8) set = "Excellence";
  else if (score >= 7) set = "Good";
  else if (score >= 4) set = "Not good";
  else set = "Bad";

  return set;
}
// console.log(checkStudent(3));

//v2
function checkStudentV2(score) {
  if (0 > score || score > 10) return "Invalid Score";

  let set = "Bad";

  if (score > 8) set = "Excellence";
  else if (score >= 7) set = "Good";
  else if (score >= 4) set = "Not good";

  return set;
}

//v3
export function checkStudentV3(score) {
  if (score < 0 || score > 10) return "Invalid";

  if (score > 8) return "Excellence";
  if (score >= 7) return "Good";
  if (score >= 4) return "Not good";

  return "Bad";
}
// console.log(checkStudent(3));

// switch case
function getErrorMessageV1(error) {
  let message = "";

  switch (error) {
    case "E01":
      message = "Error invalid";
      break;
    case "E02":
      message = "Too many error";
      break;
    default:
      message = "something wrong";
      break;
  }
  return message;
}
// console.log(getErrorMessage("E01"));
// console.log(getErrorMessage());

function getErrorMessageV2(error) {
  const errorMap = {
    E01: "Test1",
    E02: "Test2",
    E03: "Test3",
  };

  const message = errorMap[error];
  return message;
}
// console.log(getErrorMessage("E01"));

function getError(errorCode) {
  let message = "";

  switch (errorCode) {
    case "E1":
      message = "Error01";
      break;
    case "E2":
      message = "Error02";
      break;
    default:
      message = "Wrong out";
      break;
  }
  return message;
}
