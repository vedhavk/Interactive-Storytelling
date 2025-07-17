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
TaleCraft/
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Story-related pages
│ └── App.js
├── server/ # Express backend
│ ├── routes/ # API route handlers
│ ├── controllers/ # Logic for handling requests
│ ├── models/ # MongoDB schemas
│ ├── .env.example # Sample env file
│ └── index.js # Server entry point
├── .gitignore
├── README.md
└── package.json


---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/talecraft.git
cd talecraft

2. Set Up the Frontend
bash
Copy code
cd client
npm install
npm start
3. Set Up the Backend
bash
Copy code
cd ../server
npm install
Create a .env file in the server/ directory based on .env.example:

env
Copy code
OPENAI_API_KEY=your_openai_key
MONGO_URI=your_mongo_connection_string
PORT=5000
Start the server:

bash
Copy code
npm run dev
✨ Features
🧠 AI-generated stories using OpenAI

✍️ Manual story creation & editing

📚 Browse stories by genre or keyword

❤️ Like and bookmark stories

🔐 User authentication system

📱 Fully responsive UI

🧪 Example API Endpoints
Method	Endpoint	Description
POST	/api/story/create	Create a new story
GET	/api/story/all	Fetch all stories
GET	/api/story/:id	Get a story by ID
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login user

🗒️ Future Enhancements
 Collaborative story writing

 Comments and story ratings

 Profile pages for users

 Story sharing & social media integration

 Audio narration for stories

🤝 Contributing
Contributions are welcome!

Fork the repository

Create your branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Add new feature')

Push to the branch (git push origin feature-name)

Open a Pull Request

📄 License
This project is licensed under the MIT License.
See the LICENSE file for more details.

🙏 Acknowledgements
OpenAI

MongoDB

React

Tailwind CSS

GSAP

yaml
Copy code

---

✅ Now go to your GitHub repo → click on **README.md** → **Edit** → paste this → commit!

Let me know if you'd like me to help generate your `LICENSE` file or `.env.example` file too.







Ask ChatGPT
