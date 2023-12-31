
const TaskTracker = ({completedTasks, totalTasks}) => {

  const renderWeeks = () => {
    const weeks = [];

    for (let i = 0; i < 8; i++) {
      const tasks = [];

      for (let j = 0; j < 3; j++) {
        const taskIndex = i * 3 + j;
        const isTaskCompleted = taskIndex < completedTasks;

        tasks.push(
          <div
            key={j}
            className={`relative flex items-center justify-center
            ${
              taskIndex % 3 === 0 ?
              "rounded-l-full" :
              taskIndex % 3 === 2 ?
              "rounded-r-full" :
              ""
            }
             ${
              isTaskCompleted ? `bg-main` : 'bg-[#D9D9D9]'
            }`}
          >
            {taskIndex === completedTasks - 1 && completedTasks < totalTasks && (
              <img
                src="/images/triangle.svg"
                alt="triangle"
                className="currentTaskTriangle absolute -top-[37px] left-1/2 transform -translate-x-1/2"
                draggable={false}
              />
            )}
          </div>
        );
      }

      if (completedTasks >= (i + 1) * 3) {
        tasks[1] = (
          <div
            key={1}
            className={`relative flex items-center justify-center ${
              completedTasks >= (i + 1) * 3 ? `bg-main task-${(i + 1) * 3}` : 'bg-[#D9D9D9]'
            }`}
          >
            <img
              src="/images/tick.svg"
              alt="tick"
              className="fullWeekCompletedTick"
              draggable={false}
            />
          </div>
        );
      }

      weeks.push(
        <div key={i} className="h-[32px] grid grid-cols-3 rounded-full divide-x divide-white">
          {tasks}
        </div>
      );
    }
    return weeks;
  };

  return (
    <div className="relative bg-[#F8F8F8] border border-[#8C8C8C] grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr,1fr,1fr] gap-2 rounded-full w-full px-3 py-2">
      {renderWeeks()}
    </div>
  );
};

export default TaskTracker;