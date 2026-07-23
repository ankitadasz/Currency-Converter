# 💱 Currency Converter

A simple, live currency converter built with React and the [Frankfurter API](https://frankfurter.dev/), fetching real exchange rates published by the European Central Bank.

🔗 **Repo:** [github.com/ankitadasz/Currency-Converter](https://github.com/ankitadasz/Currency-Converter)

## ✨ Features

- Convert between 6 major currencies — USD, EUR, GBP, INR, JPY, AUD
- Live exchange rates fetched on demand (no unnecessary API calls)
- Simple, clean UI with instant feedback
- Handles loading and error states gracefully

## 🛠️ Tech Stack

- **React** – UI library
- **TanStack Query (react-query)** – data fetching & caching
- **Axios** – HTTP client
- **Frankfurter API** – free, no-auth exchange rate data

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ankitadasz/Currency-Converter.git
cd Currency-Converter/currency-converter

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be running at `http://localhost:5173` (or whatever port Vite assigns).

## 📖 How It Works

1. Enter an amount you want to convert.
2. Select the currency you're converting **from**.
3. Select the currency you're converting **to**.
4. Click **Convert** to fetch the live exchange rate and see the result.

Rates are fetched on-demand via the `/latest` endpoint of the Frankfurter API:

```
https://api.frankfurter.dev/v1/latest?amount={amount}&from={from}&to={to}
```

## 📂 Project Structure

```
currency-converter/
├── public/
├── src/
│   ├── API/
│   │   └── Api.jsx                  # Axios instance & fetchCurrency function
│   ├── assets/
│   ├── Components/
│   │   ├── Layout/
│   │   │   └── CurrencyConverter.jsx
│   │   └── Ui/
│   │       └── Loading.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🙏 Acknowledgements

- [Frankfurter API](https://frankfurter.dev/) for free, reliable exchange rate data
- [TanStack Query](https://tanstack.com/query) for effortless data fetching

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
<img width="1921" height="910" alt="image" src="https://github.com/user-attachments/assets/a2fa3d8c-fc77-4b7a-9ac3-6bcfdc38e863" />
<img width="1921" height="910" alt="image" src="https://github.com/user-attachments/assets/e805e96e-672f-4418-b771-7a1176da1261" />
