# Vue 3 Authentication App

This is a simple authentication app built using **Vue 3**, **Vuex**, **Vuetify**, and **Vuelidate**. The app includes:

- Signup and Login pages
- Form validation
- LocalStorage-based authentication
- Protected Home view

---

## 🛠️ Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vuex 4](https://next.vuex.vuejs.org/)
- [Vue Router 4](https://router.vuejs.org/)
- [Vuetify 3](https://next.vuetifyjs.com/)
- [Vuelidate](https://vuelidate-next.netlify.app/)

---

## 📦 Project Setup

```bash
# Clone the project
git clone https://github.com/your-username/auth-app.git

# Navigate into the project
cd auth-app

# Install dependencies
npm install

# Run the development server
npm run dev
# Project structure
src/
│
├── assets/              # Static assets
├── components/          # Reusable components (if any)
├── router/              # Vue Router setup
│   └── index.js
├── store/               # Vuex store
│   └── index.js
├── views/               # Login, Signup, Home views
│   ├── Login.vue
│   ├── Signup.vue
│   └── Home.vue
├── App.vue              # Root component
└── main.js              # App entry point
