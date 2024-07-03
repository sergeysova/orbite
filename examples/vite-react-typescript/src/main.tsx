import ReactDOM from "react-dom/client";
import { Application } from "./application";
import "./index.css";

const container = document.querySelector("#root") as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(<Application />);
