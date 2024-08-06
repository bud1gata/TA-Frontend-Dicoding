import { baseUrl } from "./notesApi";
import { showResponseMessage } from "./notesApi";
import { getNotes } from "./requestGet";
import { LoadingIndicator } from "../components/loadingIndicator";

export const removeNote = (noteId) => {
  const loadingIndicator = document.querySelector('loading-indicator');

  loadingIndicator.show();
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
      })
      .finally(() => {
        // Hide the loading indicator regardless of the outcome
        loadingIndicator.hide();
    });
  };