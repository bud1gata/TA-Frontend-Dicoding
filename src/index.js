import { TitleHeader } from "./components/header.js";
import { InputForm } from "./components/input.js";
import { NoteItem } from "./components/note-item.js";
import { ShowList } from "./components/showList.js";
import css from "./styles/styles.css";
import { getNotes } from "../src/api/requestGet.js"
import { insertNote } from "./api/requestAdd.js";
import { LoadingIndicator } from "./components/loadingIndicator.js";
//import { xhr } from "../src/api/testNoteGet.js"
