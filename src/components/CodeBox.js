import React, { useState } from "react";

const CodeBox = ({ code }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(code)
      .then(() => setCopySuccess("Copied!"))
      .catch(() => setCopySuccess("Failed to copy!"));
  };

  return (
    <div style={styles.container}>
      <pre style={styles.pre}>
        <code>{code}</code>
      </pre>
      <button onClick={copyToClipboard} style={styles.button}>
        Copy
      </button>
      {copySuccess && <span style={styles.copySuccess}>{copySuccess}</span>}
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid #ddd",
    borderRadius: "4px",
    padding: "10px",
    position: "relative",
    maxWidth: "600px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
  },
  pre: {
    margin: 0,
    overflowX: "auto",
  },
  button: {
    position: "absolute",
    top: "10px",
    right: "10px",
    padding: "5px 10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  copySuccess: {
    marginTop: "10px",
    color: "green",
  },
};

export default CodeBox;
