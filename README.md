# 🎓 University Resources Hub

A simple and organized **Linktree-style application** built to centralize university resources in one place.

This project was created using **React + TypeScript + TailwindCSS** and focuses on making access to study materials faster and cleaner.

---

## ✨ Features

* Organized resource categories
* Quick access to recorded classes
* Quick access to exercises and questions
* Modular architecture
* Responsive design
* Easy scalability for adding new sections and links
* Clean academic-inspired interface

---

## 📂 Project Structure

```plaintext
src/
├── components/
│   ├── common/
│   │   └── LinkCard.tsx
│   └── sections/
│       └── LinkSection.tsx
├── data/
│   └── links.ts
├── pages/
│   └── ResourcesPage.tsx
```

### Structure explanation

* **components/common** → Reusable UI components.
* **components/sections** → Components responsible for rendering grouped content.
* **data** → Centralized application data.
* **pages** → Main application pages.

---

## 📚 Categories

### Recorded Classes

Access links to:

* Recorded lectures
* Review content
* Study materials

### Questions

Access links to:

* Question lists
* Practice exercises
* Exams and assessments

---

## 🛠 Technologies

* React
* TypeScript
* TailwindCSS

---

## ➕ Adding New Links

Open:

```plaintext
src/data/links.ts
```

Add a new item:

```ts
{
  id: "questions",
  title: "Questions",
  items: [
    {
      id: 3,
      title: "Module 3 Exercises",
      url: "https://example.com"
    }
  ]
}
```

The UI updates automatically.

---

## 🎨 Design Goals

* Minimal
* Modern
* Fast navigation
* Easy maintenance
* Mobile-friendly
* Academic-focused

---

## 🚀 Future Improvements

* Search bar
* Dark mode
* Link management via UI
* Authentication
* Progress tracking
* Resource favorites

---

Built to make accessing university resources simpler and more organized.
