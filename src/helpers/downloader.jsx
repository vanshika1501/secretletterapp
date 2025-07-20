import React from 'react'

const downloader = () => {
  const link = document.createElement("a");
  link.href = "/VanshikaSharma_SoftwareDeveloper_Resume.pdf"; // path to your PDF in the public folder
  link.download = "VanshikaSharma_SoftwareDeveloper_Resume.pdf"; // name to save the file as
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default downloader