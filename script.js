// Hirschman 30‑Day Workout Plan
// This script populates the list of days, displays the details for a selected day
// and keeps track of completion state using localStorage.

// Define the 30‑day workout plan. Each entry contains a title and an array of
// workout descriptions. Feel free to customize exercises or structure.
const workoutPlan = [
  {
    title: 'Day 1 – Upper Body',
    workouts: [
      'Push‑ups: 3 sets of 10 reps',
      'Tricep dips: 3 sets of 12 reps',
      'Plank hold: 3 sets of 30 seconds'
    ]
  },
  {
    title: 'Day 2 – Lower Body',
    workouts: [
      'Bodyweight squats: 3 sets of 15 reps',
      'Walking lunges: 3 sets of 12 reps each leg',
      'Calf raises: 3 sets of 20 reps'
    ]
  },
  {
    title: 'Day 3 – Cardio Blast',
    workouts: [
      'Jumping jacks: 3 sets of 50 reps',
      'High knees: 3 sets of 30 seconds',
      'Mountain climbers: 3 sets of 30 seconds'
    ]
  },
  {
    title: 'Day 4 – Core Strength',
    workouts: [
      'Sit‑ups: 3 sets of 20 reps',
      'Russian twists: 3 sets of 15 reps (each side)',
      'Leg raises: 3 sets of 15 reps'
    ]
  },
  {
    title: 'Day 5 – Rest & Stretch',
    workouts: [
      'Light stretching or yoga: 20 minutes',
      'Deep breathing exercises: 5 minutes'
    ]
  },
  {
    title: 'Day 6 – Full Body',
    workouts: [
      'Burpees: 3 sets of 10 reps',
      'Squat jumps: 3 sets of 12 reps',
      'Push‑ups: 3 sets of 10 reps',
      'Plank hold: 1 minute'
    ]
  },
  {
    title: 'Day 7 – HIIT Session',
    workouts: [
      'Repeat the following for 15 minutes:',
      '30 seconds of intense cardio (jump rope or sprint)',
      '30 seconds of rest'
    ]
  },
  {
    title: 'Day 8 – Lower Body Variations',
    workouts: [
      'Sumo squats: 3 sets of 15 reps',
      'Step‑ups: 3 sets of 12 reps each leg',
      'Glute bridges: 3 sets of 15 reps'
    ]
  },
  {
    title: 'Day 9 – Upper Body Focus',
    workouts: [
      'Diamond push‑ups: 3 sets of 8 reps',
      'Inverted rows (under table): 3 sets of 10 reps',
      'Shoulder taps: 3 sets of 20 (10 each side)'
    ]
  },
  {
    title: 'Day 10 – Active Recovery',
    workouts: [
      'Brisk walk or light jog: 20–30 minutes',
      'Full body stretch: 15 minutes'
    ]
  },
  {
    title: 'Day 11 – Cardio & Core',
    workouts: [
      'Jump rope: 3 sets of 1 minute',
      'Bicycle crunches: 3 sets of 20 reps',
      'Side plank: 3 sets of 30 seconds each side'
    ]
  },
  {
    title: 'Day 12 – Lower Body Power',
    workouts: [
      'Jump squats: 3 sets of 12 reps',
      'Bulgarian split squats: 3 sets of 10 reps each leg',
      'Wall sit: 3 sets of 45 seconds'
    ]
  },
  {
    title: 'Day 13 – Upper Body Endurance',
    workouts: [
      'Incline push‑ups (against table): 3 sets of 15 reps',
      'Arm circles: 3 sets of 30 seconds forwards and backwards',
      'Tricep extensions (using a water bottle or weight): 3 sets of 12 reps'
    ]
  },
  {
    title: 'Day 14 – Yoga Flow',
    workouts: [
      'Sun salutations: 5 rounds',
      'Warrior flow sequence: 10 minutes',
      'Cool down stretches: 10 minutes'
    ]
  },
  {
    title: 'Day 15 – Full Body Circuit',
    workouts: [
      'Circuit (repeat 3x):',
      '15 bodyweight squats',
      '12 push‑ups',
      '20 bicycle crunches',
      '15 jumping jacks'
    ]
  },
  {
    title: 'Day 16 – Rest Day',
    workouts: [
      'Optional light stretching or leisurely walk',
      'Focus on hydration and nutrition'
    ]
  },
  {
    title: 'Day 17 – Lower Body Burn',
    workouts: [
      'Pistol squat progressions: 3 sets of 5 reps each leg (use support if needed)',
      'Reverse lunges: 3 sets of 12 reps each leg',
      'Calf raise pulses: 3 sets of 25 reps'
    ]
  },
  {
    title: 'Day 18 – Upper Body Strength',
    workouts: [
      'Decline push‑ups (feet elevated): 3 sets of 8 reps',
      'Pike push‑ups: 3 sets of 10 reps',
      'Superman hold: 3 sets of 30 seconds'
    ]
  },
  {
    title: 'Day 19 – Cardio Challenge',
    workouts: [
      'Stair climbing or step‑ups: 10 minutes',
      'Burpees: 3 sets of 12 reps',
      'Skaters: 3 sets of 20 reps'
    ]
  },
  {
    title: 'Day 20 – Mobility & Recovery',
    workouts: [
      'Foam rolling or self‑massage: 10 minutes',
      'Hip mobility drills: 10 minutes',
      'Forward fold & hamstring stretch: 5 minutes'
    ]
  },
  {
    title: 'Day 21 – Core Intensifier',
    workouts: [
      'Reverse crunches: 3 sets of 15 reps',
      'Plank shoulder taps: 3 sets of 20 taps',
      'Flutter kicks: 3 sets of 30 seconds'
    ]
  },
  {
    title: 'Day 22 – Lower Body HIIT',
    workouts: [
      '30 seconds squat jumps, 30 seconds rest – repeat 8x',
      '30 seconds alternating lunges, 30 seconds rest – repeat 8x',
      '30 seconds plank jacks, 30 seconds rest – repeat 8x'
    ]
  },
  {
    title: 'Day 23 – Upper & Core Mix',
    workouts: [
      'Plank to push‑up: 3 sets of 12 reps',
      'Side plank with leg lift: 3 sets of 10 reps each side',
      'V‑ups: 3 sets of 15 reps'
    ]
  },
  {
    title: 'Day 24 – Active Rest',
    workouts: [
      'Choose an enjoyable activity: dance, swim, hike or cycle for 30 minutes',
      'Gentle stretching: 10 minutes'
    ]
  },
  {
    title: 'Day 25 – Lower Body Sculpt',
    workouts: [
      'Curtsy lunges: 3 sets of 12 reps each leg',
      'Single‑leg deadlifts (bodyweight): 3 sets of 10 reps each leg',
      'Wall squat pulses: 3 sets of 20 pulses'
    ]
  },
  {
    title: 'Day 26 – Upper Body Burnout',
    workouts: [
      'Close‑grip push‑ups: 3 sets of 10 reps',
      'Chair dips: 3 sets of 12 reps',
      'Plank up‑downs: 3 sets of 12 reps'
    ]
  },
  {
    title: 'Day 27 – Cardio & Legs',
    workouts: [
      'Jump rope: 5 minutes warm‑up',
      'Alternating jump lunges: 3 sets of 20 reps',
      'Box/bench jumps or step‑ups: 3 sets of 12 reps'
    ]
  },
  {
    title: 'Day 28 – Core Stability',
    workouts: [
      'Bird dog: 3 sets of 12 reps each side',
      'Dead bug: 3 sets of 20 reps',
      'Side plank hip dips: 3 sets of 15 reps each side'
    ]
  },
  {
    title: 'Day 29 – Yoga & Flexibility',
    workouts: [
      '10 minute gentle vinyasa flow',
      'Seated forward fold: 2 minutes',
      'Supine twist: 2 minutes each side',
      'Child’s pose: 2 minutes'
    ]
  },
  {
    title: 'Day 30 – Final Challenge',
    workouts: [
      'Complete each move for 2 rounds with 1 minute rest between:',
      '20 squats',
      '15 push‑ups',
      '20 sit‑ups',
      '10 burpees',
      '30 second plank'
    ]
  }
];

// DOM references
const daysList = document.getElementById('days');
const dayTitle = document.getElementById('day-title');
const workoutDetails = document.getElementById('workout-details');
const completeBtn = document.getElementById('complete-btn');
const progressPercent = document.getElementById('progress-percent');
const progressFill = document.getElementById('progress-fill');

// Retrieve completion state from localStorage or initialize
const completionState = JSON.parse(localStorage.getItem('hirschmanWorkoutCompletion')) || Array(workoutPlan.length).fill(false);

// Populate the list of days
function populateDayList() {
  daysList.innerHTML = '';
  workoutPlan.forEach((day, idx) => {
    const li = document.createElement('li');
    li.textContent = `Day ${idx + 1}`;
    li.dataset.index = idx;
    // Add a status label element
    const statusSpan = document.createElement('span');
    statusSpan.classList.add('status');
    if (completionState[idx]) {
      li.classList.add('completed');
      statusSpan.classList.add('completed');
      statusSpan.textContent = 'Done';
    } else {
      statusSpan.classList.add('pending');
      statusSpan.textContent = 'Pending';
    }
    li.appendChild(statusSpan);
    // Highlight the active day when clicked
    li.addEventListener('click', () => selectDay(idx));
    daysList.appendChild(li);
  });
  updateProgress();
}

// Select a day and show its details
function selectDay(index) {
  // Remove active class from all list items
  document.querySelectorAll('#day-list li').forEach((item) => item.classList.remove('active'));
  // Add active class to selected item
  const activeItem = document.querySelector(`#day-list li[data-index="${index}"]`);
  if (activeItem) activeItem.classList.add('active');
  // Update details
  const day = workoutPlan[index];
  dayTitle.textContent = day.title;
  workoutDetails.innerHTML = '';
  const ul = document.createElement('ul');
  day.workouts.forEach((exercise) => {
    const li = document.createElement('li');
    li.textContent = exercise;
    ul.appendChild(li);
  });
  workoutDetails.appendChild(ul);
  // Show complete button
  completeBtn.style.display = 'inline-block';
  completeBtn.onclick = () => markComplete(index);
}

// Mark a day as complete
function markComplete(index) {
  if (!completionState[index]) {
    completionState[index] = true;
    localStorage.setItem('hirschmanWorkoutCompletion', JSON.stringify(completionState));
    populateDayList();
    updateProgress();
    // Show a simple confirmation message
    alert(`Great job! You completed ${workoutPlan[index].title}.`);
  }
}

// Update progress bar and percentage
function updateProgress() {
  const completedCount = completionState.filter(Boolean).length;
  const percent = Math.round((completedCount / workoutPlan.length) * 100);
  progressPercent.textContent = `${percent}%`;
  progressFill.style.width = `${percent}%`;
}

// Initialize the interface
populateDayList();

// Theme toggling logic
document.addEventListener('DOMContentLoaded', () => {
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (!themeToggleBtn) return;
  // Helper to apply theme and update button icon/aria-label
  function applyTheme(theme) {
    if (theme === 'dark') {
      document.body.classList.add('dark');
      themeToggleBtn.textContent = '☀️';
      themeToggleBtn.setAttribute('aria-label', 'Switch to light mode');
    } else {
      document.body.classList.remove('dark');
      themeToggleBtn.textContent = '🌙';
      themeToggleBtn.setAttribute('aria-label', 'Switch to dark mode');
    }
    localStorage.setItem('hirschmanTheme', theme);
  }
  // Load saved theme from localStorage or default to light
  const savedTheme = localStorage.getItem('hirschmanTheme') || 'light';
  applyTheme(savedTheme);
  // Listen for toggle button clicks
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });
});