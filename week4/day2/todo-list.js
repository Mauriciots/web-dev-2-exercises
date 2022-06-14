function newTask(title, description) {
  return {
    title,
    description,
    complete: false,
    markCompleted: () => {
      this.complete = true;
    },
    logState: () => {
      const { title, complete } = this;
      console.log(`${title} has${complete ? " " : " not "}been completed`);
    },
  };
}

// DRIVER CODE BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Clean Cat Litter has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
