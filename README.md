# @emstudio/\* plugins

Workspace de monorepo para desarrollar y mantener plugins de NativeScript.

## Plugins Disponibles

- [@emstudio/athmovil](packages/athmovil/README.md) - Integración de pagos con ATH Móvil

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** 12+ y npm/yarn
- **NativeScript CLI**: `npm install -g nativescript`
- **Para iOS**: macOS con Xcode y CocoaPods (`sudo gem install cocoapods`)
- **Para Android**: Android Studio y Android SDK configurado

## Setup Inicial

### 1. Clonar el repositorio

```bash
git clone https://github.com/PedroAnibarro1/ns-plugins.git
cd ns-plugins
```

### 2. Instalar dependencias

```bash
npm run setup
```

Este comando:
- Limpia instalaciones previas
- Configura yarn para ignorar versiones de engines
- Establece npm como gestor de paquetes
- Instala todas las dependencias del workspace
- Configura git hooks (Husky)
- Instala ts-patch para soporte de TypeScript

### 3. Verificar instalación

```bash
npm start
```

Esto abrirá un menú interactivo con todas las opciones disponibles para desarrollo.

## Estructura del Proyecto

```
ns-plugins/
├── packages/           # Plugins del workspace
│   └── athmovil/      # Plugin ATH Móvil
├── apps/              # Aplicaciones demo
│   ├── demo/          # Demo NativeScript Core
│   └── demo-angular/  # Demo Angular
├── tools/             # Herramientas y scripts
└── package.json       # Configuración del workspace
```

## Desarrollo

### Ejecutar apps demo

```bash
npm start
```

Desde el menú interactivo puedes:
- Ejecutar las apps demo en iOS/Android
- Compilar los plugins
- Ejecutar tests
- Limpiar builds

### Desarrollo de un plugin específico

```bash
npm start
```

Selecciona la opción "focus" para el plugin que deseas desarrollar. Esto aislará el plugin y actualizará las apps demo para trabajar solo con ese plugin.

### Agregar un nuevo plugin

```bash
npm run add
```

Sigue las instrucciones en pantalla para agregar un nuevo plugin al workspace.

# How to use?

This workspace manages the suite of plugins listed above. 

In general, when in doubt with what to do, just `npm start`.

## How to add a new package to workspace?

```
npm run add
```

At the prompt, enter the name of the new package.

- This adds a plugin harness in `packages` with the necessary boilerplate to just start developing
- Updates all demo app flavors to support demoing the new package
- Adds shared code in `tools/demo` where you can write demo code **once** and share across all demo flavors
- Updates build tooling to support the new package
- Updates the `npm start` interactive display
- Updates the README here to list the new package

## How to add Angular compatibility to a package

```
npm run add-angular
```

At the prompt, enter the name of the package to add an `angular` folder to it with the necessary boilerplate to provide Angular support to the package.

## How to focus on just 1 package to develop in isolation

```
npm start
```

- Choose the focus commands for the package you wish to focus on and hit enter.
- All the demo app's will be updated to isolate that 1 package and for supported IDE's (currently VS Code), the source code will also become isolated in the workspace.

Note: *good to always clean the demo you plan to run after focusing. (You can clean any demo from `npm start` as well)*

## How to publish packages?

```
npm run publish-packages
```

- You will be prompted for the package names to publish. Leaving blank and hitting enter will publish them all.
- You will then be prompted for the version to use. Leaving blank will auto bump the patch version (it also handles prerelease types like alpha, beta, rc, etc. - It even auto tags the corresponding prelease type on npm).
- You will then be given a brief sanity check 🧠😊

<h3 align="center">Made with ❤️</h3>
