import React from 'react'

const downloader = () => {
  const link = document.createElement("a");
  link.href = "/resume.pdf"; // path to your PDF in the public folder
  link.download = "Vanshika_Sharma_Resume.pdf"; // name to save the file as
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloader