# Free4Talk Chrome Extension 🗣️🧪

This is a lightweight Chrome extension built just for **fun and data collection** on [Free4Talk.com](https://free4talk.com). It includes basic automation and interaction monitoring features, designed to observe or extract information while you're using the platform.

---

## 🧰 Features

- ⚙️ Automatically activates when visiting Free4Talk.com  
- 📡 Collects basic room or group data for testing purposes  
- 🎨 Custom UI styling with `f4t.css`  
- 🔘 Simple popup interface for extension control  
- 🧩 Built using Chrome Extension APIs (Manifest V2 or V3)

---

## 📁 Project Structure

Free4Talk-Extension/  
│  
├── activateExtension.js   # Injected script to activate functionality on the site  
├── background.js          # Background script for monitoring or messaging  
├── f4t.css                # Custom styling for the extension or injected UI  
├── logo.png               # Extension icon  
├── manifest.json          # Extension configuration  
├── popup.html             # Popup interface when extension icon is clicked  
├── run.js                 # Main logic script for interaction or scraping  
└── README.md              # Project documentation (this file)

---

## 🛠️ Installation (Developer Mode)

1. Download or clone this repository.  
2. Open Chrome and go to `chrome://extensions/`.  
3. Enable **Developer mode** (top right toggle).  
4. Click **Load unpacked** and select the project folder.  
5. You should now see the Free4Talk extension in your toolbar.

---

## 🖥️ How It Works

- The extension runs scripts when Free4Talk.com is visited.  
- `activateExtension.js` and `run.js` handle interaction or data logic.  
- The popup interface gives users optional control (if applicable).  
- Custom styles may modify or enhance the UI using `f4t.css`.

---

## ⚠️ Disclaimer

This Chrome extension is for **fun and educational purposes only**.  
It is not affiliated with or endorsed by Free4Talk.com.  
Use responsibly. Any data collection should be **non-intrusive** and comply with relevant terms of service and privacy expectations.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

Developed by @princemehta-git  
https://github.com/princemehta-git
