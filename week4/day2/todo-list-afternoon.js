// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    complete: false,
    description: description,
    completeTask: function () {
      task.complete = true;
    },
    logTaskState: function () {
      console.log(
        `${this.title} has${this.complete ? ' ' : ' not '}been completed`
      );
    },
  };
  return task;
  //   taskTitles.push(title);
  //   taskComplete.push(false);
}

// DRIVER CODE BELOW

const task1 = newTask(
  'Clean Cat Litter',
  'Take all the 💩 out of the litter box'
);
const task2 = newTask('Do Laundry', '😨');
const tasks = [task1, task2];

task1.logTaskState();
task1.completeTask();
task1.logTaskState(); // Clean Cat Litter has been completed

console.log(tasks);
