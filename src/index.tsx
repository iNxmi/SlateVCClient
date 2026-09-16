import { createRoot } from 'react-dom/client'
import {Routes} from "@generouted/react-router"
import './index.css'

const element = document.getElementById('root')!
createRoot(element).render(<Routes/>)
