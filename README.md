# 📖 TaleCraft – AI-Powered Storytelling Website

Welcome to **TaleCraft**, an interactive web application where users can create, explore, and share stories with the help of AI. Designed with a modern frontend and powerful backend, TaleCraft brings creativity to life through technology.

---

## 🌐 Live Website

🔗 [Visit TaleCraft](https://your-deployed-site-link.com)  
> *(Replace this with your actual deployment link - Netlify, Vercel, etc.)*

---

## 📸 Preview

![TaleCraft Screenshot](https://your-screenshot-link.com)  
> *(Optional: Upload preview screenshots to GitHub or use a public image link)*

---

## 🚀 Tech Stack

### Frontend
- ⚛️ React.js  
- 🎨 Tailwind CSS  
- 🎞️ GSAP (for animations)  
- 🌐 Axios

### Backend
- 🟩 Node.js  
- ⚙️ Express.js  
- 🍃 MongoDB (via Mongoose)  
- 🔐 dotenv  
- 🤖 OpenAI API

---

## 📁 Project Structure

```
TaleCraft/
├── client/               # React frontend
│   ├── public/
│   └── src/
│       ├── components/   # Reusable UI components
│       ├── pages/        # Story-related pages
│       └── App.js
├── server/               # Express backend
│   ├── routes/           # API route handlers
│   ├── controllers/      # Logic for handling requests
│   ├── models/           # MongoDB schemas
│   ├── .env.example      # Sample env file
│   └── index.js          # Server entry point
├── .gitignore
├── README.md
└── package.json
```

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/talecraft.git
cd talecraft
```

### 2. Set Up the Frontend

```bash
cd client
npm install
npm start
```

### 3. Set Up the Backend

```bash
cd ../server
npm install
```

Create a `.env` file in the `server/` directory based on `.env.example`:

```env
OPENAI_API_KEY=your_openai_key
MONGO_URI=your_mongo_connection_string
PORT=5000
```

Start the server:

```bash
npm run dev
```

---

## ✨ Features

- 🧠 AI-generated stories using OpenAI
- ✍️ Manual story creation & editing
- 📚 Browse stories by genre or keyword
- ❤️ Like and bookmark stories
- 🔐 User authentication system
- 📱 Fully responsive UI

---

## 🧪 Example API Endpoints

| Method | Endpoint             | Description         |
|--------|----------------------|---------------------|
| POST   | `/api/story/create`  | Create a new story  |
| GET    | `/api/story/all`     | Fetch all stories   |
| GET    | `/api/story/:id`     | Get a story by ID   |
| POST   | `/api/auth/register` | Register new user   |
| POST   | `/api/auth/login`    | Login user          |

---

## 🗒️ Future Enhancements

- [ ] Collaborative story writing  
- [ ] Comments and story ratings  
- [ ] Profile pages for users  
- [ ] Story sharing & social media integration  
- [ ] Audio narration for stories  

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository  
2. Create your branch:  
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:  
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.  
See the [`LICENSE`](./LICENSE) file for more details.

---

## 🙏 Acknowledgements

- [OpenAI](https://platform.openai.com/)
- [MongoDB](https://www.mongodb.com/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [GSAP](https://greensock.com/gsap/)
