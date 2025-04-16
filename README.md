# LegitiRank-AI (Website rank legitimacy checker)

I am starting this project to combat the growing misuse and manipulation of SEO (Search Engine Optimization). I feel like search algorithm manipulation is a growing problem and I am trying to re-establish a cleaner, more trustworthy search engine experience. I understand that this problem will probably grow alongside, or leapfrog with, the solution, but perhaps now is a good time to get the process started. This response is not intended to combat SEO itself, only the misuse and manipulation of SEO to promote illegitimate rankings. 

---

## 🚦 What It Does
- Injects Trust Score badges directly into Google search result pages
- Uses clean, unobtrusive styling to reduce visual clutter
- Provides a popup UI to toggle Trust Scores on or off
- Stores user preferences using Chrome's `storage.sync`
- Lays the groundwork for deeper AI-based scoring using review sentiment and backlink profiles

---

## 🧭 How to Install and Use (For End Users)
> 🔒 Coming soon: Once LegitiRank-AI is published on the Chrome Web Store.

When available:
1. Visit the LegitiRank-AI Chrome Web Store page
2. Click **Add to Chrome**
3. Click the LegitiRank-AI icon in your toolbar
4. Use the toggle to enable or disable Trust Score overlays
5. Browse Google as usual — now with transparency in your search results

---

## 🛠️ How to Install for Testing/Development

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/legitirank-ai.git
cd legitirank-ai
```

### 2. Load the Extension Locally in Chrome
1. Open `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load unpacked**
4. Select the `src/` directory

### 3. Test It
- Go to [google.com](https://www.google.com) and search for something
- Trust badges should appear next to each search result
- Click the extension icon to enable/disable badges

---

## 🧪 Run Tests
1. Install dependencies:
```bash
npm install
```

2. Run Jest:
```bash
npm test
```

3. For coverage:
```bash
npm test -- --coverage
```

---

## 🎨 Visual Aid (Coming Soon)
Screenshots and demo GIFs will be included in this section once core features are stabilized and styled.

---

## 🤝 Contributor Expectations
We welcome ethical SEO researchers, open source contributors, and UI/UX collaborators. Please:
- Keep code clean and self-explanatory
- Follow the file structure and naming conventions
- Be respectful of the project’s mission and non-commercial intent

---

## 🐛 Known Issues
- Only works on Google search result pages
- Trust scores are placeholders until real scoring is integrated
- No Firefox support yet
- Toggle state applies only after reload (real-time syncing is not yet implemented)

---

## 💸 Donations
If you find value in this project and want to support its continued development:

[☕ Buy Me a Coffee](https://buymeacoffee.com/YOUR_HANDLE)  
[💖 Sponsor on GitHub](https://github.com/sponsors/YOUR_USERNAME)

---

## 🧠 Reminder to Self: README Structure Goals
This file should continue to evolve around the following principles:
- ✅ SEO-aware (help users and contributors discover and understand it)
- ✅ Gain users (clear install/use instructions)
- ✅ Gain contributors (transparent roadmap, clean codebase)
- ✅ Serve as a reminder (document the “why” and next steps)
- ✅ Reduce noise (address FAQs and known issues clearly)

---

## 📌 To-Do
- [ ] Add screenshots to Visual Aid section
- [ ] Integrate real scoring logic
- [ ] Improve toggle UX with real-time refresh
- [ ] Package for Chrome Web Store

## 🤖 AI Assistance

Parts of this project were developed with the help of [ChatGPT](https://openai.com/chatgpt), an AI language model created by OpenAI. ChatGPT assisted with code suggestions, documentation structuring, testing setup, and project organization.

All decisions, implementations, and customizations were made by Cory Miglis as part of an effort to learn, grow, and deliver an original software development project with integrity.

