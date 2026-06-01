# Deploy David Kamau Portfolio to Firebase Hosting

This app is a Create React App project. Firebase Hosting serves the static files from the `build` folder after you run `npm run build`.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ (you already have Node via nvm)
- A Google account
- This project folder on your machine

## Step 1 — Install dependencies

From the project root:

```bash
cd /home/dave/Videos/Actual/David_portfolio
npm install
```

This installs React dependencies and `firebase-tools` (Firebase CLI) as a dev dependency.

## Step 2 — Create a Firebase project

1. Open [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project** (or **Create a project**).
3. Name it something like `david-kamau-portfolio` (project ID must be globally unique).
4. Disable Google Analytics if you do not need it (optional).
5. Click **Create project** and wait until it finishes.

Copy the **Project ID** (e.g. `david-kamau-portfolio-abc123`). You need it in the next step.

## Step 3 — Link this repo to your Firebase project

Edit `.firebaserc` in the project root and set your project ID:

```json
{
  "projects": {
    "default": "YOUR_FIREBASE_PROJECT_ID"
  }
}
```

Replace `YOUR_FIREBASE_PROJECT_ID` with the ID from Step 2.
This repo is linked to project ID **`david-kamau-portfolio`**.

## Step 4 — Log in to Firebase CLI

```bash
npx firebase login
```

A browser window opens. Sign in with the same Google account you used in the Firebase Console.

To check you are logged in:

```bash
npx firebase projects:list
```

Your project should appear in the list.

## Step 5 — Enable Hosting (first time only)

```bash
npx firebase init hosting
```

When prompted:

| Prompt | Answer |
|--------|--------|
| Use an existing project | **Yes** → pick your project |
| Public directory | **`build`** (already set in `firebase.json`) |
| Configure as single-page app | **Yes** (rewrites to `index.html` for React Router) |
| Overwrite `firebase.json`? | **No** (keep the repo’s file) |
| Overwrite `index.html` in build? | **No** |

If Hosting is already enabled in the console, you can skip `firebase init` and go to Step 6.

## Step 6 — Build the React app

```bash
npm run build
```

This creates the `build/` folder. Firebase deploys **only** what is inside `build/`.

Test locally (optional):

```bash
npx firebase serve --only hosting
```

Open the URL shown (usually `http://localhost:5000`) and click through Home, About, Projects, and Contact.

## Step 7 — Deploy to Firebase

```bash
npm run deploy
```

Or manually:

```bash
npm run build
npx firebase deploy --only hosting
```

When it finishes, the CLI prints your live URL
s, for example:

- `https://YOUR_PROJECT_ID.web.app`
- `https://YOUR_PROJECT_ID.firebaseapp.com`

## Step 8 — Custom domain (optional)

1. Firebase Console → your project → **Hosting** → **Add custom domain**.
2. Follow the steps to verify DNS (e.g. `portfolio.yourdomain.com`).
3. SSL is provisioned automatically.

## Updating the site after changes

Whenever you change code:

```bash
npm run deploy
```

That runs `build` then `firebase deploy --only hosting`.

## Troubleshooting

### `Firebase CLI login failed`

Run `npx firebase login --reauth` and try again.

### `HTTP Error: 403` or wrong project

Check `.firebaserc` matches the project you created and that you are logged in with the owner account.

### Refresh on `/About` or `/Projects` shows 404

`firebase.json` must include the `rewrites` rule (already added in this repo). Redeploy after any change to `firebase.json`.

### Contact form does not send

The form uses [Formspree](https://formspree.io/). Confirm form ID `xjvzbnpq` in `src/components/ContactForm.js` is tied to your Formspree account and that `davidkamauw90@gmail.com` is set as the notification email in Formspree.

### `npm run build` fails

Run `npm install` again, fix any ESLint errors shown, then retry `npm run build`.

## Quick reference

| Task | Command |
|------|---------|
| Local dev | `npm start` |
| Production build | `npm run build` |
| Preview build with Firebase | `npx firebase serve --only hosting` |
| Deploy | `npm run deploy` |
| Login | `npx firebase login` |
