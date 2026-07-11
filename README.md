# 💰 FinTrack - Personal Finance Tracker

A modern, privacy-first personal finance management web application with a beautiful UI inspired by contemporary design patterns.

![FinTrack Preview](preview.png)

## ✨ Features

### 📊 **Financial Management**
- **Income & Expense Tracking** - Log and categorize all transactions
- **Savings Accounts** - Create virtual savings pots with deposit/withdrawal tracking
- **Monthly Budgets** - Set category-based spending limits with visual alerts
- **Financial Goals** - Track progress toward savings goals with deadlines

### 🎨 **Modern UI/UX**
- **Dark Sidebar** with lime green accents
- **Elevated Cards** with soft shadows and smooth animations
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Clean Typography** - Inter font with perfect hierarchy

### 🔒 **Privacy-First**
- **100% Local Storage** - All data stays in your browser
- **No Server Required** - Zero data transmission
- **Export/Import** - Full control over your data
- **Offline Capable** - Works without internet connection

### 👤 **User Management**
- **Profile Page** - View stats and manage account
- **Settings** - Customize currency, date format, and preferences
- **Data Management** - Export, import, and clear data
- **Security** - Change password and manage privacy settings

## 🚀 Quick Start

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fintrack.git
   cd fintrack
   ```

2. **Open in browser**
   ```bash
   # Option 1: Direct open
   open index.html

   # Option 2: Local server (recommended)
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

3. **Create an account** and start tracking!

### No Build Required

This is a pure vanilla JavaScript application with no dependencies or build process. Just open `index.html` in any modern browser.

## 📁 Project Structure

```
finance-tracker/
├── index.html          # Landing page
├── login.html          # Login page
├── register.html       # Registration page
├── dashboard.html      # Main dashboard
├── expenses.html       # Transactions page
├── savings.html        # Savings accounts page
├── budget.html         # Budget management
├── goals.html          # Financial goals
├── profile.html        # User profile
├── settings.html       # Settings & preferences
├── css/
│   └── styles.css      # Modern design system
└── js/
    ├── app.js          # Core app logic & auth
    └── finance.js      # Financial data management
```

## 🎨 Design System

### Color Palette
- **Primary:** Lime Green (#c5f82a)
- **Background:** Cream (#f5f3ed)
- **Sidebar:** Dark Charcoal (#2b2b2d)
- **Success:** Green (#16a34a)
- **Danger:** Red (#dc2626)
- **Warning:** Orange (#f59e0b)
- **Purple Accent:** (#a78bfa)

### Typography
- **Font Family:** Inter
- **Headings:** 800 weight, tight letter-spacing
- **Body:** 400-600 weight
- **Labels:** 700 weight, uppercase, tracked

### Components
- **Cards:** 20-24px border radius, elevated shadows
- **Buttons:** Rounded, 12px radius, hover animations
- **Progress Bars:** Rounded ends, smooth transitions
- **Badges:** Pill-shaped, bold colors

## 💾 Data Storage

All data is stored using browser `localStorage`:

- **Users:** `ft_users`
- **Session:** `ft_session`
- **Transactions:** `ft_transactions_{email}`
- **Savings:** `ft_savings_{email}`
- **Budgets:** `ft_budgets_{email}`
- **Goals:** `ft_goals_{email}`
- **Settings:** `ft_settings`

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern design system with CSS variables
- **Vanilla JavaScript** - No frameworks or libraries
- **localStorage** - Client-side data persistence

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 🔐 Security

- Passwords are base64 encoded (client-side demo only)
- All data stays local - no server communication
- Export/import for data portability
- Clear data option for complete removal

**Note:** This is a client-side demo app. For production use, implement proper authentication and backend storage.

## 📸 Screenshots

### Landing Page
Modern hero section with feature highlights

### Dashboard
Financial overview with stats, recent transactions, and budget status

### Expenses
Comprehensive transaction tracking with filters

### Savings
Virtual savings accounts with progress tracking

### Budget
Category-based budget management with visual alerts

### Goals
Financial goal tracking with deadline countdowns

### Profile
User stats and account management

### Settings
Preferences and data management

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by modern health dashboard UIs
- Icons from Unicode emoji set
- Inter font from Google Fonts

## 📧 Contact

For questions or feedback, please open an issue on GitHub.

---

**Made with 💚 by FinTrack Team**
