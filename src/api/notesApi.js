import { hideLoadingIndicator } from '../components/loadingIndicator';

const BASE_URL = 'https://notes-api.dicoding.dev/v2';

export async function fetchNotes() {
  try {
    showLoadingIndicator(); // Show loading indicator
    const response = await fetch(`${BASE_URL}/notes`);
    const data = await response.json();
    return data.data; // Return notes array
  } catch (error) {
    console.error('Error fetching notes:', error);
    throw error;
  } finally {
    hideLoadingIndicator(); // Hide loading indicator
  }
}

export async function addNote(title, body) {
  try {
    showLoadingIndicator();
    const response = await fetch(`${BASE_URL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer <YOUR_ACCESS_TOKEN>', // Replace with your token
      },
      body: JSON.stringify({ title, body }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error adding note:', error);
    throw error;
  } finally {
    hideLoadingIndicator();
  }
}

export async function deleteNote(id) {
  try {
    showLoadingIndicator();
    await fetch(`${BASE_URL}/notes/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer <YOUR_ACCESS_TOKEN>',
      },
    });
  } catch (error) {
    console.error('Error deleting note:', error);
    throw error;
  } finally {
    hideLoadingIndicator();
  }
}
