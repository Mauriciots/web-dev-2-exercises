// /*
// Step 1: Introduce Task Object
// - Refactor the newTask function to return the Task object.
// - Add a description property to the Task object.
// */
// function newTask(title, description) {
//   const taskObj = {
//     title: title,
//     description: description,
//   };
//   return taskObj;
// }

// // DRIVER CODE BELOW

// const task1 = newTask(
//   'Clean Cat Litter',
//   'Take all the 💩 out of the litter box'
// );
// const task2 = newTask('Do Laundry', '😨');
// const tasks = [task1, task2];

// // for now, let's just make sure we see our tasks
// console.log(tasks);

/*
Step 2: Refactor Functions
- Refactor logTaskState and completeTask to use the Task object as parameter.
*/
// function newTask(title, description) {
//   const taskObj = {
//     title: title,
//     description: description,
//     state: false,
//   };
//   return taskObj;
// }

// function logTaskState(task) {
//   if (task.state) {
//     console.log(`${task.title} has been completed`);
//     return;
//   }
//   console.log(`${task.title} has not been completed`);
// }

// function completeTask(task) {
//   task.state = true;
// }

// const task1 = newTask(
//   'Clean Cat Litter',
//   'Take all the 💩 out of the litter box'
// );
// const task2 = newTask('Do Laundry', '😨');
// const tasks = [task1, task2];

// logTaskState(task1); // Clean Cat Litter has not been completed
// completeTask(task1);
// logTaskState(task1); // Clean Cat Litter has been completed

// console.log(tasks);

/*
Step 3: Use Methods Instead
- Refactor the newTask function to use methods for logging state and marking task as completed.
*/

// function newTask(title, description) {
//   const taskObj = {
//     title: title,
//     description: description,
//     markCompleted: function () {
//       taskObj.state = true;
//       return;
//     },
//     logState: function () {
//       if (this.state) {
//         console.log(`${this.title} has been completed`);
//         return;
//       }
//       console.log(`${this.title} has not been completed`);
//     },
//   };
//   return taskObj;
// }

// const task1 = newTask(
//   'Clean Cat Litter',
//   'Take all the 💩 out of the litter box'
// );
// const task2 = newTask('Do Laundry', '😨');
// const tasks = [task1, task2];

// task1.logState(); // Clean Cat Litter has not been completed
// task1.markCompleted();
// task1.logState(); // Clean Cat Litter has been completed
