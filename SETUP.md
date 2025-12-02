# Guía de Setup del Proyecto

Esta guía te ayudará a preparar el proyecto desde cero para desarrollo.

## Pasos de Instalación

### 1. Verificar Requisitos

```bash
# Verificar Node.js (debe ser 12+)
node --version

# Verificar npm
npm --version

# Verificar NativeScript CLI
ns --version

# Si no está instalado:
npm install -g nativescript
```

### 2. Instalar Yarn (si no está instalado)

El proyecto usa yarn para gestión de dependencias:

```bash
npm install -g yarn
```

### 3. Clonar e Instalar

```bash
# Clonar el repositorio
git clone https://github.com/PedroAnibarro1/ns-plugins.git
cd ns-plugins

# Ejecutar setup
npm run setup
```

El comando `npm run setup` ejecuta:
- Limpieza de instalaciones previas (`rimraf node_modules`, etc.)
- Configuración de yarn (`yarn config set ignore-engines true`)
- Establecimiento de npm como package manager (`ns package-manager set npm`)
- Instalación de todas las dependencias (`yarn install`)
- Configuración de git hooks (`husky install`)
- Instalación de ts-patch (`npx ts-patch install`)

### 4. Verificar Instalación

```bash
# Verificar que las dependencias estén instaladas
ls node_modules/@nativescript

# Iniciar el menú interactivo
npm start
```

## Configuración Específica por Plataforma

### Android

No se requiere configuración adicional. El plugin incluye automáticamente:
- SDK de ATH Móvil (`athmovil-checkout-release.aar`) en `packages/athmovil/platforms/android/libs/`
- Configuración de Gradle en `packages/athmovil/platforms/android/include.gradle`

### iOS

Los pods de CocoaPods se instalan automáticamente cuando construyes la aplicación demo. No es necesario ejecutar `pod install` manualmente en el plugin.

Si necesitas instalar los pods manualmente:

```bash
cd packages/athmovil/platforms/ios
pod install
```

**Nota:** El error sobre "Could not automatically select an Xcode workspace" es normal y esperado. Los pods se instalarán correctamente cuando construyas la app demo.

## Verificación Post-Instalación

### Checklist

- [ ] `node_modules` existe y contiene dependencias de NativeScript
- [ ] Archivo AAR presente: `packages/athmovil/platforms/android/libs/athmovil-checkout-release.aar`
- [ ] Archivos TypeScript del plugin presentes en `packages/athmovil/`
- [ ] Apps demo presentes: `apps/demo` y `apps/demo-angular`
- [ ] Comando `npm start` funciona y muestra el menú interactivo

### Comandos de Verificación

```bash
# Verificar estructura del proyecto
ls -la packages/athmovil/

# Verificar AAR de Android
ls -lh packages/athmovil/platforms/android/libs/athmovil-checkout-release.aar

# Verificar apps demo
ls -d apps/demo apps/demo-angular

# Verificar dependencias principales
ls node_modules/@nativescript | head -5
```

## Solución de Problemas

### Error: "yarn: command not found"

```bash
npm install -g yarn
```

### Error: "CocoaPods not found" (solo macOS/iOS)

```bash
sudo gem install cocoapods
```

### Error al ejecutar `npm run setup`

1. Asegúrate de tener Node.js 12+ instalado
2. Limpia manualmente y vuelve a intentar:
   ```bash
   rm -rf node_modules yarn.lock package-lock.json
   npm run setup
   ```

### Las dependencias no se instalan correctamente

```bash
# Limpiar todo
rm -rf node_modules yarn.lock package-lock.json

# Reinstalar
npm run setup
```

### Problemas con git hooks

```bash
# Reinstalar hooks manualmente
npx husky install
```

## Próximos Pasos

Una vez completado el setup:

1. **Explorar el proyecto:**
   ```bash
   npm start
   ```

2. **Leer la documentación del plugin:**
   - [Documentación de ATH Móvil](packages/athmovil/README.md)

3. **Ejecutar una app demo:**
   ```bash
   npm start
   # Selecciona la opción para ejecutar demo en iOS o Android
   ```

4. **Desarrollar:**
   - El código del plugin está en `packages/athmovil/`
   - El código compartido de demos está en `tools/demo/`

## Comandos Útiles

```bash
# Menú interactivo
npm start

# Agregar nuevo plugin
npm run add

# Agregar soporte Angular a un plugin
npm run add-angular

# Publicar paquetes
npm run publish-packages

# Sincronizar plugins con demos
npm run sync-packages-with-demos
```

## Recursos Adicionales

- [Documentación de NativeScript](https://docs.nativescript.org/)
- [Documentación del Plugin ATH Móvil](packages/athmovil/README.md)
- [GitHub Issues](https://github.com/PedroAnibarro1/ns-plugins/issues)

