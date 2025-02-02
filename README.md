# Modern Dating Web Application

A modern dating web application built with React, featuring a responsive design, user authentication, profile management, and matching system. This application provides a seamless experience for users looking to connect with potential matches.

## 🔴 Live Demo

Experience the application live:
- **Live Site**: [Dating App](https://saptjanm-assignment.vercel.app/)
- **Demo Credentials**:
  - Email: raj@gmail.com
  - Password: raj123456

[![Deploy with Vercel](https://saptjanm-assignment.vercel.app/)](https://saptjanm-assignment.vercel.app/)

![App Preview]("src/assets/preview.png")

## 🚀 Features

- 📱 Responsive design for all devices
- 🔐 User authentication (Sign In/Sign Up)
- 👤 Profile management
- 💑 Match finding system
- 📊 User dashboard
- 🎨 Modern UI with Tailwind CSS
- 🛣️ Multiple page routing
- ⚡ Fast and optimized performance

## 🛠️ Prerequisites

Before running this project, make sure you have the following installed on your system:

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher) or yarn

## 📦 Dependencies

The project relies on the following main dependencies:

```json
{
  "dependencies": {
    "@heroicons/react": "^2.2.0",
    "@reduxjs/toolkit": "^2.5.1",
    "@tailwindcss/forms": "^0.5.10",
    "@tailwindcss/vite": "^4.0.1",
    "firebase": "^11.2.0",
    "firestore": "^1.1.6",
    "lucide-react": "^0.474.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-google-button": "^0.8.0",
    "react-icons": "^5.4.0",
    "react-redux": "^9.2.0",
    "react-router-dom": "^7.1.4",
    "react-slick": "^0.30.3",
    "react-toastify": "^11.0.3",
    "redux": "^5.0.1",
    "tailwindcss": "^4.0.1"
  },
  }
```
## 📦 Dev Dependencies
The project relies on the following Dev dependencies:
````    json
{
    "devDependencies": {
    "@eslint/js": "^9.17.0",
    "@types/react": "^18.3.18",
    "@types/react-dom": "^18.3.5",
    "@vitejs/plugin-react": "^4.3.4",
    "eslint": "^9.17.0",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.16",
    "globals": "^15.14.0",
    "vite": "^6.0.5"
  }
}
````

## 🚀 Installation and Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/sachin0986/saptjanm_assignment.git
   cd dating-app
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install
   ```

3. **Start the development server**
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev
   ```

4. **Open the application**
   - Navigate to `http://localhost:5173` in your browser

## 📁 Project Structure

```
dating-app/
├── src/
│   ├── Components/
│   │   ├── Header.jsx
│   │   ├── Body.jsx
│   │   ├── Footer.jsx
│   │   └── Dashboard.jsx
│   ├── pages/
│   │   ├── SignIn.jsx
│   │   ├── SignUp.jsx
│   │   ├── ProfilePage.jsx
│   │   ├── MyMatches.jsx
│   │   └── Error.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── public/
├── package.json
└── README.md
```

## 🛣️ Routes

- `/` - Home page
- `/dashboard` - User dashboard
- `/signin` - Sign in page
- `/signup` - Sign up page
- `/profilePage` - User profile page
- `/matches` - Matches page

## 💻 Development

To start development:

1. Create a new branch for your feature
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and commit them
   ```bash
   git add .
   git commit -m "Add your commit message"
   ```

3. Push to your branch
   ```bash
   git push origin feature/your-feature-name
   ```

## 🔧 Configuration

### Tailwind CSS

The project uses Tailwind CSS for styling. You can customize the configuration in:
- `tailwind.config.js`
- `postcss.config.js`

### Router Configuration

Route configurations are managed in `App.jsx` using `react-router-dom`. Add new routes in the `appRouter` configuration.

## 📝 Additional Setup Notes

1. **Environment Variables**
   - Create a `.env` file in the root directory
   - Add necessary environment variables

2. **API Configuration**
   - Update API endpoints in relevant components
   - Configure base URL in your environment variables

3. **Assets**
   - Place static assets in the `public` directory
   - Use dynamic assets in the `src/assets` directory

## 🔍 Troubleshooting

Common issues and solutions:

1. **Port already in use**
   ```bash
   # Kill the process using the port
   npx kill-port 5173
   ```

2. **Module not found errors**
   ```bash
   # Clear npm cache and reinstall
   npm cache clean --force
   npm install
   ```

## 📚 Resources

- [React Documentation](https://react.dev)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Sachin Arora - Initial work

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS team for the utility-first CSS framework
- All contributors who have helped with the project