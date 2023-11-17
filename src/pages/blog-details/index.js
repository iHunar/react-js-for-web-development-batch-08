import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, onSnapshot, getFirestore } from "firebase/firestore";
import firebase from "../../config/firebase";
import { FacebookShareButton, FacebookIcon } from "react-share";
const BlogDetails = () => {
  const db = getFirestore(firebase);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);
  //   const item = location.state.data;
  let id = location.pathname.slice(14);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "blog", id), (doc) => {
      let data = doc.data();
      if (data) {
        setTitle(data.title);
        setDetails(data.details);
        setFileUrl(data.fileUrl);
      } else {
        navigate("/blog")
      }
    });

    setLoading(false);
  }, []);
  console.log("url", `https://web-testing-1.netlify.app/react-share/${id}`);
  return (
    <div>
      <h1>Blog Details</h1>
      <p>{}</p>
      {/* <div className="card">
        <h3>{item.title}</h3>
        <img src={item.image} style={{ width: "100%" }} />
        <p>{item.des} ...</p>
      
      </div> */}
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <div className="card">
            <h3>{title}</h3>
            <img src={fileUrl} style={{ width: "100%" }} />
            <p>{details}</p>
            <FacebookShareButton url={`https://abc/blog-details/${id}`}>
              <FacebookIcon size={20} round={false} />
            </FacebookShareButton>
          </div>
        </div>
      )}
    </div>
  );
};
export default BlogDetails;
