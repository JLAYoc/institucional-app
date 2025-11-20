# --- Etapa 1: Build del frontend ---
FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . .
RUN npm run build

# --- Etapa 2: Servir con NGINX ---
FROM nginx:alpine

# Copiar el build generado al directorio de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer el puerto de NGINX
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
