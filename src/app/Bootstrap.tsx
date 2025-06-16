import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { AppProvider } from "./providers"
import { Router } from "./router"

export function bootstrap() {
    const rootElement = document.getElementById("root")

    if (!rootElement) {
        throw new Error("Root element not found. Make sure there is a div with id 'root' in your HTML.")
    }

    const root = createRoot(rootElement)

    root.render(
        <StrictMode>
            <AppProvider>
                <Router />
            </AppProvider>
        </StrictMode>,
    )
}

