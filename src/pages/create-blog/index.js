import React, { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import firebase from "./../../config/firebase";
import { collection, addDoc ,getFirestore} from "firebase/firestore";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const CreateBlog = () => {
  const db = getFirestore(firebase);
  const storage = getStorage();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [progress, setProgress] = React.useState(0);
  const [uploadStarting, setUploadStarting] = useState(false);
  //   React.useEffect(() => {
  //     const timer = setInterval(() => {
  //       setProgress((prevProgress) =>
  //         prevProgress >= 100 ? 10 : prevProgress + 10
  //       );
  //     }, 800);
  //     return () => {
  //       clearInterval(timer);
  //     };
  //   }, []);
  const createPostHandler = async () => {
    const blogDetails = {
      title: title,
      details: details,
      fileUrl: fileUrl,
    };
    const docRef = await addDoc(collection(db, "blog"), blogDetails);
    console.log("Document written with ID: ", docRef.id);
  };

  // file change
  const fileChange = (event) => {
    const storageRef = ref(storage, "images/rivers.jpg");
    let file = event.target.files[0];
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        setUploadStarting(true);

        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(Math.floor(progress));
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setFileUrl(downloadURL);
          setUploadStarting(false);
        });
      }
    );
  };
  return (
    <div>
      <h1>Create Blog</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(val) => setTitle(val.target.value)}
      />
      <textarea
        value={details}
        onChange={(val) => setDetails(val.target.value)}
      ></textarea>
      <input type="file" onChange={(event) => fileChange(event)} />
      {uploadStarting && (
        <Box sx={{ width: "100%" }}>
          <LinearProgressWithLabel value={progress} />
        </Box>
      )}
      <button onClick={createPostHandler}>Create Post</button>
    </div>
  );
};
export default CreateBlog;
