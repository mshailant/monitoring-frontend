# Etapa única para desarrollo
FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /app

# Instalar dependencias globales si querés (opcional)
# RUN npm install -g pnpm

# Copiar dependencias y resolverlas
COPY package*.json ./
RUN npm install

# Copiar todo el código
COPY . .

# Exponer puerto (Next.js por defecto es 3000, podés cambiarlo si choca con el backend)
EXPOSE 3001

# Comando de desarrollo con hot reload
CMD ["npm", "run", "dev"]
