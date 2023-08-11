FROM node:14

# Copiar el código fuente al contenedor
COPY . /app

# Establecer el directorio de trabajo
WORKDIR /app

# Instalar dependencias
RUN npm install

# Establecer el comando predeterminado para iniciar el servicio
CMD ["node", "index.js"]

EXPOSE 3000
