import { baseUrl, showResponseMessage } from "./notesApi.js";
import { getNotes } from "./requestGet.js";

export const insertNote = async (note) => {
    try {
      const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note),
    };

      const response = await fetch(`${baseUrl}`, options);
      const responseJson = await response.json();

      if (responseJson.status !== 'success') {
        throw new Error(responseJson.message);
    }
      showResponseMessage(responseJson.message);
      getNotes();
    } catch (error) {
      showResponseMessage(error.message || error);
    }
  };