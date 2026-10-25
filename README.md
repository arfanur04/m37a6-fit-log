# FitLog

> A simple dark gym companion to find workouts and plan your day.

**FitLog** is a website where you can see many workouts. You can pick the ones you like, add them to today's plan, save others for later, and mark them as done.

:link: **Live Site:** [your-live-link-here](https://your-live-link-here)

:package: **Repository:** [github.com/your-username/your-repo-name](https://github.com/your-username/your-repo-name)

---

## :hammer_and_wrench: Technologies Used

- **Next.js** (App Router, with TypeScript) - to build the user interface and handle page navigation
- **React.js** - to make the components and manage state
- **Tailwind CSS** - to style the website
- **daisyUI** - ready-made components for Tailwind
- **Lucide React** - for icons
- **FitLog API** - to get the workout data
- **localStorage** - to keep the plan and saved data after page reload

---

## :sparkles: Key Features

1. **Workout library** - All workouts from the API are shown as cards in a 3x4 grid on large screens. Each card shows the image, category tags, name, equipment, and a stats row with duration, calories and rating. Click a card to open its details page.
2. **Workout details page** - See a big image, description, category tags, key specs (equipment, difficulty, sets, reps, duration, calories, rating) and step-by-step instructions.
3. **Add to plan and save for later** - Add a workout to "Today's Plan" or save it for later. The "Plan" and "Saved" badges in the navbar update at once, and a toast message shows for every action.
4. **My Plan page** - See live numbers for Exercises, Minutes and Calories. Switch between "Today's Plan" and "Saved" tabs, and sort the list by Duration, Calories or Rating. An empty message shows when the list is empty.
5. **Mark as Done and Remove** - Each card in My Plan has a "Mark as Done" button and a Remove (X) button. The workout is updated or removed, and a toast message shows.

---
