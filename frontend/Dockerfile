# Utilise l'image node:lts-alpine
FROM node:lts-alpine

# Définit le répertoire de travail dans le conteneur
WORKDIR /app

# Copie les fichiers de configuration (pnpm et package.json)
COPY pnpm-lock.yaml ./
COPY package.json ./

# Installe pnpm
RUN npm install -g pnpm

# Installe les dépendances
RUN pnpm install

# Copie tout le reste des fichiers
COPY . .

# Expose le port 5173 utilisé par Vite par défaut
EXPOSE 5173

# Lancer l'application
CMD ["pnpm", "run", "dev"]