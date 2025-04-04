import { useState } from "react";
import "./Playlist.css";

const AddPlaylist = ({ showModal, setShowModal, onAdd }) => {
  const [addPlaylistName, setAddPlaylistName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };
  const handleAddPlaylist = () => {
    if (!addPlaylistName) {
      alert("Please enter a playlist name.");
      return;
    }

    onAdd(addPlaylistName, selectedFile);
    setAddPlaylistName("");
    setSelectedFile(null);
    console.log("Playlist Name:", addPlaylistName);
    console.log("Selected File:", selectedFile);

    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Create New Playlist</h2>
            <div className="modal-input">
              <input
                type="text"
                placeholder="Playlist Name"
                value={addPlaylistName}
                onChange={(e) => setAddPlaylistName(e.target.value)}
                className="add-playlit-input"
              />
              <input
                type="file"
                onChange={handleFileChange}
                className="add-playlit-file"
              />
              <button
                className="add-playlit-button"
                onClick={handleAddPlaylist}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddPlaylist;
