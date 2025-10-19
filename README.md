# 💸 Smart ATM Simulator

A modern, interactive **ATM simulator** built using **HTML, CSS, and JavaScript**.  
It mimics how an ATM dispenses money using available denominations — calculating the optimal combination of notes.

---

## 🎯 Features

✅ **ATM-style keypad input** (like a real machine)  
✅ **Smart note dispensing algorithm** (based on available denominations)  
✅ **Error handling** for invalid or unsupported amounts  
✅ **Animated modern UI** with glowing buttons and gradients  
✅ **Responsive and simple** — built without any frameworks  

---

## 🧠 How It Works

1. Enter an amount using the on-screen number buttons.  
2. Press **Enter** to withdraw.  
3. The app calculates the number of each note (e.g. 5000, 1000, 500, etc.).  
4. The result is displayed below with total notes used.  
5. Press **C** to clear and start a new withdrawal.

---

## 💡 Denominations Used

The ATM supports these Pakistani currency notes:

[5000, 1000, 500, 100, 50, 20, 10]

markdown
Copy code

It can only dispense amounts that are multiples of **10**.  
If you enter an unsupported amount (like `1255`), it will show an error message.

---

## ⚙️ Code Overview

### 🧩 HTML
- Builds the **ATM structure**:
  - Display screen
  - Number keypad
  - Result area for dispensed notes
  - Error message box

### 🎨 CSS
- Stylish gradient background with neon effects.
- Different colors for:
  - **Number keys** → Blue
  - **Enter** → Green
  - **Clear (C)** → Yellow
- Rounded design and glowing shadows for a modern digital look.

### 🧮 JavaScript
Handles:
- **Button clicks** and keypad input.
- **Smart withdrawal logic** using denominations.
- **Error handling** and result display.
- **Reset logic** after each transaction.

---

## 🧾 Withdrawal Logic (Simplified Explanation)

1. If the amount equals one denomination → give that note directly.  
2. Otherwise:
   - Reserve a portion of the amount for smaller notes.
   - Use larger denominations first (greedy method).
   - Distribute remaining money using smaller denominations.
3. Validate that the total matches the requested amount.
4. Display each note and how many of them are used.

---

## 🖥️ Files Structure

📁 Smart-ATM/
│
├── index.html # Main HTML structure
├── style.css # ATM design and styles
└── app.js # ATM functionality and logic

yaml
Copy code

---

## 🚀 How to Run

1. Download or clone this repository.
2. Open the folder.
3. Double-click **index.html** to open it in your browser.
4. Start using your Smart ATM simulator!

---

## 📸 UI Preview

✨ A dark modern ATM interface with glowing buttons and digital-style display.  
When you withdraw an amount, it shows how many notes of each denomination are dispensed.

---

## 👨‍💻 Developed By

**Usman**  
Simple, clean, and functional — a hands-on project to understand JS logic, UI design, and event handling.

---

## 🧰 Technologies Used

- HTML5  
- CSS3  
- Vanilla JavaScript (no frameworks)

---

## 🧪 Example Outputs

| Input | Output Notes | Total Notes |
|-------|---------------|-------------|
| 5000  | 1 × 5000      | 1 |
| 1200  | 1 × 1000, 1 × 100, 5 × 20 | 7 |
| 7880  | 1 × 5000, 2 × 1000, 1 × 500, 1 × 100, 1 × 50, 1 × 20, 1 × 10 | 7 |

---

### 🏁 Future Improvements

- Add **custom denominations** input.  
- Add **sound effects** or **animations** for dispensing.  
- Make UI responsive for mobile screens.  
- Add balance system or PIN simulation.

---

> “A simple idea built with solid logic is the best way to learn programming.”
