# Academic Website

This repository contains my academic website built with React and hosted on GitHub Pages.

## 🚀 Live Website

Visit the website at [https://matpato.github.io/matildepato](https://matpato.github.io/matildepato)

## 🛠️ Technology Stack

- React.js
- Tailwind CSS
- GitHub Pages

## 📁 Project Structure

```
my-academic-website/
├── src/
│ ├── public/
│   │   └── img/ 
│   │── index.html
│   │── manifest.json    
│   ├── src/
│   │   └── assests/
│   │       ├── css/
│   │       ├── fonts/ 
│   │   └── components/
│   │       ├── profile/
│   │       ├── research/
│   │       ├── teaching/
│   │       ├── ui/
│   ├── App.jsx
│   └── index.js
```

## 🚀 Local Development

1. Clone the repository:
```bash
git clone https://github.com/matpato/matildepato.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 📦 Deployment

To deploy updates to the website:

1. Commit your changes:
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

2. Deploy to GitHub Pages:
```bash
npm run build
cd build
git init
git add .
git commit -m "Deploy updates"
git branch -M main
git remote add origin https://github.com/matpato/matildepato.git
git push --force origin main:gh-pages
```
3. Update the CV
```bash
npm run update
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Contact

For any questions or suggestions, please feel free to contact me.

Matilde Pato (2025) | matilde.pato@isel.pt
