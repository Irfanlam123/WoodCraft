// galleryAPI.js
//const response = await fetch("http://localhost:8080/api/gallery");

 export const getAllGalleries = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/gallery');
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching galleries:', error);
    throw error;
  }
};
