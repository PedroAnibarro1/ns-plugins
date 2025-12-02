# @emstudio/athmovil

Plugin de NativeScript para integrar pagos con ATH Móvil en aplicaciones iOS y Android.

## Instalación

```bash
ns plugin add @emstudio/athmovil
```

## Requisitos Previos

### Para Desarrollo

- Node.js 12+ y npm/yarn
- NativeScript CLI instalado globalmente: `npm install -g nativescript`
- Para iOS: macOS con Xcode y CocoaPods
- Para Android: Android Studio y Android SDK

### Credenciales de ATH Móvil

Necesitas obtener de tu cuenta de ATH Móvil:
- **Public Token**: Token público de tu cuenta de negocio
- **URL Scheme**: Esquema único para tu aplicación (ej: `mi-app-athmovil`)

## Configuración

### Android

#### 1. Configurar AndroidManifest.xml

Agrega un `intent-filter` en tu actividad principal para manejar el callback de ATH Móvil:

```xml
<activity android:name="com.tns.NativeScriptActivity">
    <!-- ... configuración existente ... -->
    
    <!-- Intent filter para ATH Móvil callback -->
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="tu-url-scheme" />
    </intent-filter>
</activity>
```

**Ubicación del archivo:**
- `App_Resources/Android/src/main/AndroidManifest.xml`

#### 2. Verificar dependencias

El plugin incluye automáticamente el SDK de ATH Móvil para Android mediante el archivo AAR ubicado en:
- `platforms/android/libs/athmovil-checkout-release.aar`

No se requiere configuración adicional.

### iOS

#### 1. Configurar Info.plist

Agrega el URL scheme en tu `Info.plist`:

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>tu-url-scheme</string>
        </array>
    </dict>
</array>
```

**Ubicación del archivo:**
- `App_Resources/iOS/Info.plist`

#### 2. Manejar URL Callback en AppDelegate

En tu archivo `app.ts` o `main.ts`, agrega el manejo del callback:

```typescript
import { Application } from '@nativescript/core';
import { Athmovil } from '@emstudio/athmovil';

if (global.isIOS) {
    const MyDelegate = UIResponder.extend({
        applicationOpenURLSourceApplicationAnnotation: function(
            application: UIApplication,
            url: NSURL,
            sourceApplication: string,
            annotation: any
        ) {
            Athmovil.handleIncomingURL(url);
            return true;
        }
    });

    Application.ios.delegate = MyDelegate;
}
```

#### 3. Instalación de CocoaPods

El SDK de iOS se instala automáticamente mediante CocoaPods cuando construyes la aplicación. No es necesario ejecutar `pod install` manualmente en el plugin.

## Uso

### Inicialización

Primero, configura un listener para manejar las respuestas de las transacciones:

```typescript
import { AMTransactionSession, AMTransactionListener } from '@emstudio/athmovil';

const listener: AMTransactionListener = {
    onCompletePayment: (referenceNumber: string) => {
        console.log('✅ Pago completado:', referenceNumber);
        // Manejar pago exitoso
    },
    onCancelledPayment: (referenceNumber: string) => {
        console.log('❌ Pago cancelado:', referenceNumber);
        // Manejar pago cancelado
    },
    onExpiredPayment: (referenceNumber: string) => {
        console.log('⏰ Pago expirado:', referenceNumber);
        // Manejar pago expirado
    },
    onPaymentException: (error: string, description: string) => {
        console.error('⚠️ Error:', error, description);
        // Manejar error
    }
};

// Crear sesión de transacción
const session = new AMTransactionSession(listener);
```

### Procesar un Pago

```typescript
import { Athmovil, AMPayment, AMPaymentItem } from '@emstudio/athmovil';

// 1. Crear items del pago
const items: AMPaymentItem[] = [
    new AMPaymentItem(
        'Producto 1',              // name
        'Descripción del producto', // description
        1,                         // quantity
        10.00,                     // price
        'metadata-opcional'        // metadata
    ),
    new AMPaymentItem(
        'Producto 2',
        'Otra descripción',
        2,
        15.50,
        'otra-metadata'
    )
];

// 2. Crear objeto de pago
const payment = new AMPayment(
    41.00,        // total (debe ser subtotal + tax)
    35.00,        // subtotal
    6.00,         // tax
    'metadata1',   // metadata1 (opcional)
    'metadata2',  // metadata2 (opcional)
    items         // array de items
);

// 3. Iniciar checkout
Athmovil.checkout(
    'tu-public-token',  // Token público de ATH Móvil
    'tu-url-scheme',    // URL scheme configurado en AndroidManifest/Info.plist
    payment
);
```

### Ejemplo Completo

```typescript
import { Athmovil, AMPayment, AMPaymentItem, AMTransactionSession } from '@emstudio/athmovil';

export class PaymentService {
    private publicToken = 'tu-public-token';
    private urlScheme = 'tu-url-scheme';

    constructor() {
        // Configurar listener
        new AMTransactionSession({
            onCompletePayment: (referenceNumber: string) => {
                alert(`Pago completado: ${referenceNumber}`);
            },
            onCancelledPayment: (referenceNumber: string) => {
                alert(`Pago cancelado: ${referenceNumber}`);
            },
            onExpiredPayment: (referenceNumber: string) => {
                alert(`Pago expirado: ${referenceNumber}`);
            },
            onPaymentException: (error: string, description: string) => {
                alert(`Error: ${error} - ${description}`);
            }
        });
    }

    processPayment(total: number, subtotal: number, tax: number, items: any[]) {
        const paymentItems = items.map(item => 
            new AMPaymentItem(
                item.name,
                item.description || '',
                item.quantity,
                item.price,
                item.metadata || ''
            )
        );

        const payment = new AMPayment(
            total,
            subtotal,
            tax,
            '', // metadata1
            '', // metadata2
            paymentItems
        );

        Athmovil.checkout(this.publicToken, this.urlScheme, payment);
    }
}
```

### Usar el Componente de Botón

El plugin incluye un componente de botón nativo de ATH Móvil:

#### En XML (NativeScript Core)

```xml
<Page xmlns:athmovil="@emstudio/athmovil/ui/button">
    <StackLayout>
        <athmovil:AthmovilButton 
            text="Pagar con ATH Móvil"
            tap="onPayButtonTap" />
    </StackLayout>
</Page>
```

```typescript
export function onPayButtonTap(args: EventData) {
    // Tu lógica de pago aquí
    const payment = new AMPayment(/* ... */);
    Athmovil.checkout('token', 'scheme', payment);
}
```

#### En Angular

```typescript
// En tu componente
import { AthmovilButton } from '@emstudio/athmovil/ui/button';

@Component({
    selector: 'app-payment',
    template: `
        <StackLayout>
            <AthmovilButton 
                text="Pagar con ATH Móvil"
                (tap)="onPay()">
            </AthmovilButton>
        </StackLayout>
    `
})
export class PaymentComponent {
    onPay() {
        // Tu lógica de pago
    }
}
```

## API Reference

### Clases Principales

#### `Athmovil`

Clase principal para interactuar con ATH Móvil.

**Métodos estáticos:**

- `getInstance(): Athmovil` - Obtiene la instancia singleton
- `checkout(publicToken: string, urlScheme: string, payment: AMPayment): void` - Inicia el proceso de pago
- `handleIncomingURL(url: NSURL): void` (iOS) - Maneja el callback de URL

#### `AMPayment`

Representa un pago a procesar.

**Constructor:**
```typescript
new AMPayment(
    total: number,
    subtotal: number,
    tax: number,
    metadata1: string,
    metadata2: string,
    items: AMPaymentItem[]
)
```

**Propiedades:**
- `total: number` - Total del pago
- `subtotal: number` - Subtotal del pago
- `tax: number` - Impuestos
- `metadata1: string` - Metadatos adicionales 1
- `metadata2: string` - Metadatos adicionales 2
- `items: AMPaymentItem[]` - Array de items del pago

#### `AMPaymentItem`

Representa un item individual en el pago.

**Constructor:**
```typescript
new AMPaymentItem(
    name: string,
    description: string,
    quantity: number,
    price: number,
    metadata: string
)
```

**Propiedades:**
- `name: string` - Nombre del producto
- `description: string` - Descripción del producto
- `quantity: number` - Cantidad
- `price: number` - Precio unitario
- `metadata: string` - Metadatos adicionales

#### `AMTransactionSession`

Gestiona los callbacks de transacciones.

**Constructor:**
```typescript
new AMTransactionSession(listener: AMTransactionListener)
```

#### `AMTransactionListener`

Interfaz para manejar eventos de transacción.

```typescript
interface AMTransactionListener {
    onCompletePayment(referenceNumber: string): void;
    onCancelledPayment(referenceNumber: string): void;
    onExpiredPayment(referenceNumber: string): void;
    onPaymentException(error: string, description: string): void;
}
```

### Enums

#### `AMButtonStyle`
- `original` - Estilo original del botón
- `light` - Estilo claro
- `dark` - Estilo oscuro

#### `AMLanguage`
- `english` - Inglés
- `spanish` - Español

## Troubleshooting

### Android

**Problema:** El callback no se ejecuta después del pago
- Verifica que el `intent-filter` esté correctamente configurado en `AndroidManifest.xml`
- Asegúrate de que el `urlScheme` coincida exactamente con el configurado en el `intent-filter`

**Problema:** Error al construir la app
- Verifica que el archivo `athmovil-checkout-release.aar` exista en `platforms/android/libs/`
- Limpia y reconstruye: `ns clean` y luego `ns run android`

### iOS

**Problema:** El callback no se ejecuta después del pago
- Verifica que `CFBundleURLSchemes` esté configurado en `Info.plist`
- Asegúrate de que `handleIncomingURL` esté siendo llamado en el AppDelegate
- Verifica que el `urlScheme` coincida exactamente con el configurado en `Info.plist`

**Problema:** Error al instalar pods
- Los pods se instalan automáticamente al construir la app
- Si hay problemas, ejecuta manualmente: `cd platforms/ios && pod install`

**Problema:** La app no abre ATH Móvil
- Verifica que ATH Móvil esté instalado en el dispositivo
- Verifica que el `publicToken` sea correcto
- Revisa los logs de la consola para errores específicos

### General

**Problema:** Los callbacks no se ejecutan
- Asegúrate de crear una instancia de `AMTransactionSession` antes de llamar a `checkout`
- Verifica que el listener esté correctamente implementado con todos los métodos requeridos

## Notas Importantes

1. **URL Scheme**: Debe ser único y consistente entre Android e iOS
2. **Public Token**: Obtén este token del panel de administración de ATH Móvil
3. **Total del pago**: Debe ser igual a `subtotal + tax`
4. **Callbacks**: Siempre crea una instancia de `AMTransactionSession` antes de procesar pagos
5. **Testing**: Asegúrate de probar en dispositivos reales, ya que los emuladores pueden tener limitaciones

## Versión del SDK

- **Android**: Incluido en `athmovil-checkout-release.aar`
- **iOS**: `athmovil-checkout ~> 4.2.1` (via CocoaPods)

## Soporte

Para reportar problemas o solicitar características, visita:
- [GitHub Issues](https://github.com/PedroAnibarro1/ns-plugins/issues)

## Licencia

Apache License Version 2.0
