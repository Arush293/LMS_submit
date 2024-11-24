import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import MultiStepForm from './pages/MultiStepForm';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <Provider store={store}>
    <Router>
      <div className="flex flex-col min-h-screen">
        <header>
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1>My Application</h1>
            <nav>
              <ul>
                <li><a href="/login">Login</a></li>
                <li><a href="/forgot-password">Forgot Password</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/multi-step-form">Multi-Step Form</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="flex-grow bg-gray-100 p-4">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/multi-step-form" element={<MultiStepForm />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </main>

        <footer>
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; 2024 My Application. All rights reserved.</p>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  </Provider>
);

export default App;
