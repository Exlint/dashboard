<p align="center"><img src="assets/brand.png" height="200" width="200"/></p>

<h1 align="center">Exlint</h1>

# Exlint Dashboard

The dashboard for Exlint product, including both frontend and backend applications.

## Installation

Install `pnpm` globally

```bash
  npm i -g pnpm
```

## Run Locally

Clone the project

```bash
  git clone git@github.com:Exlint/dashboard.git
```

Go to the project directory

```bash
  cd dashboard
```

Install dependencies

```bash
  pnpm -r install
```

Start both the backend and frontend

```bash
  pnpm -r start:dev
```

## Push code

When pushing the code, you must follow the commit messages convention.
First stage your desired changes and then run `git cmt` in the root folder.
You should be prompted to a commit flow in the terminal, which helps you to write a commit message following the repository convention.

If `git cmt` exits with an error, make sure you run `pnpm -r install` before.
