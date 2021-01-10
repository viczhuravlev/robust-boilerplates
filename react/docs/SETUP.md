# Setup

### Step 1

Install dependencies:

```sh
$ yarn install
```

### Step 2

Copy the file `.env.example` in the root of the application and rename it to` .env`:

```sh
$ cp .env.example .env
```

### Step 3

Fill in the `SERVER_URL` variable in the `.env` file

```sh
...
SERVER_URL=http://localhost:8888/api
...
```

### Step 4

Run project:

```sh
$ yarn dev
```
