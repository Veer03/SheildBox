import { useState } from "react";
function App() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  function handleFileChange(e) {
    setFile(e.target.files[0]);
  }

  async function handleUpload() {
    if (!file) {
      setStatus("Pick a file first");
      return;
    }
    setStatus("Uploading...");
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/split", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setStatus(`Done: ${data.message}`);
    } catch (err) {
      console.error(err);
      setStatus("Error connecting to backend");
    }
  }

  return (
    <>
      <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
        <h1>DocuFlow</h1>
        <input type="file" accept=".xlsx" onChange={handleFileChange} />
        <button onClick={handleUpload}>Split it</button>
        <p>{status}</p>
      </div>
    </>
  );
}
export default App;
