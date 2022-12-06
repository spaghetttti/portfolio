import "./download-files.styles.scss";

const DownloadFiles = () => {
  const onButtonClick = (fileName) => {
    fetch(fileName).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = fileName;
        alink.click();
      });
    });
  };
  return (
    <div className="buttons-group">
      <button className="flat-button" onClick={() => onButtonClick("CV_Asilbek.pdf")}>Download CV</button>
      <button className="flat-button" onClick={() => onButtonClick("Resume_Asilbek.pdf")}>
        Download Resume
      </button>
    </div>
  );
};

export default DownloadFiles;
