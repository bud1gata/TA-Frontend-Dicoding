import { baseUrl } from "./notesApi";
import { showResponseMessage } from "./notesApi";
import { getNotes } from "./requestGet";

export const removeNote = (noteId) => {
    fetch(`${baseUrl}/${noteId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        showResponseMessage(responseJson.message);
        getNotes();
      })
      .catch((error) => {
        showResponseMessage(error);
      });
  };