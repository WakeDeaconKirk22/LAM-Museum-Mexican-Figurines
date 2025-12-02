# LAM Museum Mexican Figurine Classifier

This project is a web-based tool for **labeling Mexican clay figurine images** from the Lam Museum of Anthropology.

The app:

- Loads images from **three regions**: `Chupicuaro`, `Colima`, `Nayarit`
- Shows a **random figurine image**
- Lets the user answer a set of **binary (Yes/No) trait questions** about:
  - Eyes
  - Nose
  - Mouth
  - Adornments
  - Craft style
- Converts answers into a **binary vector**
- Lets the user **download `labels.txt`** containing all labeled examples  
  (one JSON object per line, easy to parse in Python)

There is **no backend required** for the main labeling workflow; all labeling is done in the browser and exported with a **Download labels.txt** button.

---

## 1. Project Structure

After cloning, the repo should look something like this:

```text
LAM-Museum-Mexican-Figurines/
  dataSet/                     # (optional, other data/scripts)
  region_organizer.py          # helper script (not needed to run UI)
  website/                     # Vite + React frontend
    node_modules/              # created by `npm install`
    public/
    src/
      assets/
        Chupicuaro/            # Chupicuaro figurine images
        Colima/                # Colima figurine images
        Nayarit/               # Nayarit figurine images
      components/
      pages/
        Classifier.jsx         # main labeling interface
        Home.jsx
        About.jsx
        Contact.jsx
        Regional.jsx
      App.jsx
      main.jsx
    package.json
    vite.config.js
  README.md                    # this file


## Setup Instructions

---

```bash
git clone https://github.com/TJ302/LAM-Museum-Mexican-Figurines.git
cd LAM-Museum-Mexican-Figurines
npm install
cd website
npm run dev
```

```bash
cd /path/to/LAM-Museum-Mexican-Figurines
pip install flask flask-cors
cd /path/to/LAM-Museum-Mexican-Figurines
python label_server.py
```