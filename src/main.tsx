import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./pages/App.tsx";

const root = createRoot(document.getElementById("root"));
root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
