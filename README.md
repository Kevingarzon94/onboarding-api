🚀 Instalación y Ejecución

1. Backend (NestJS)

2. Navega a la carpeta del servidor.

3. Crea un archivo .env con: JWT_SECRET=tu_clave_secreta.

4. Ejecuta:
``` 
pnpm install
pnpm run start:dev
```

    La API correrá en http://localhost:3000.      

## 🧪 Pruebas Rápidas
Una vez encendido el servidor, puedes validar el funcionamiento con:

1. **Health Check**: `GET http://localhost:3000/health`
2. **Login**: `POST http://localhost:3000/auth/login` con credenciales `admin`/`password123`.
3. **Onboarding**: Usar el token obtenido en el Header `Authorization: Bearer <TOKEN>` para el `POST http://localhost:3000/onboarding`.