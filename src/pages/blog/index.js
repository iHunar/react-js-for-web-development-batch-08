import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getFirestore,
  collection,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import firebase from "../../config/firebase";
const Blog = () => {
  const db = getFirestore(firebase);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const q = query(collection(db, "blog"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newBlog = [];
      querySnapshot.forEach((doc) => {
        newBlog.push(doc.data());
      });
      setBlog([...newBlog]);
      setLoading(false);
    });
  }, []);
  const Posts = [
    {
      title: "Kakar links trade ties with India to Kashmir issue resolution",
      image:
        "https://www.thenews.com.pk/assets/uploads/akhbar/2023-11-16/1129538_4523065_kakar_akhbar.jpg",
      des: "The prime minister, while addressing the annual Margalla Dialogue 2023 conference held by Islamabad Policy Research Institute on “Evolving World Environment: Charting the Course for Our Future,” highlighted the potential for connectivity with regional countries, including India, and said Pakistan never shied away from establishing trade links with its eastern neighbour but it could not beg for it as trade should be for mutual benefits.The interim PM, who had also been the IPRI’s board member, told the gathering that the Kashmir issue demanded attention aligned with the aspirations of its people as, despite promises and UN guarantees, the Kashmiris could not be given their right to self-determination. Postponing the issue is not a solution as the historical resilience against colonization is evident, he added.",
    },
    {
      title: "Conditional CII nod for women to perform Haj without Mehram",
      image:
        "https://www.thenews.com.pk/assets/uploads/akhbar/2023-11-16/1129539_155317_MAKKAH_akhbar.jpg",
      des: "The prime minister, while addressing the annual Margalla Dialogue 2023 conference held by Islamabad Policy Research Institute on “Evolving World Environment: Charting the Course for Our Future,” highlighted the potential for connectivity with regional countries, including India, and said Pakistan never shied away from establishing trade links with its eastern neighbour but it could not beg for it as trade should be for mutual benefits.The interim PM, who had also been the IPRI’s board member, told the gathering that the Kashmir issue demanded attention aligned with the aspirations of its people as, despite promises and UN guarantees, the Kashmiris could not be given their right to self-determination. Postponing the issue is not a solution as the historical resilience against colonization is evident, he added.",
    },
    {
      title: "US records 16% increase in admission of Pakistani students ",
      image:
        "https://www.thenews.com.pk/assets/uploads/updates/2023-11-16/1129600_7883696_students_updates.jpg",
      des: "The prime minister, while addressing the annual Margalla Dialogue 2023 conference held by Islamabad Policy Research Institute on “Evolving World Environment: Charting the Course for Our Future,” highlighted the potential for connectivity with regional countries, including India, and said Pakistan never shied away from establishing trade links with its eastern neighbour but it could not beg for it as trade should be for mutual benefits.The interim PM, who had also been the IPRI’s board member, told the gathering that the Kashmir issue demanded attention aligned with the aspirations of its people as, despite promises and UN guarantees, the Kashmiris could not be given their right to self-determination. Postponing the issue is not a solution as the historical resilience against colonization is evident, he added.",
    },
  ];
  return (
    <div>
      <h1>Blog</h1>
      {/* {Posts.map((item, index) => {
        return (
          <div key={index} className="card">
            <h3>{item.title}</h3>
            <img src={item.image} style={{ width: "100%" }} />
            <p>{item.des.slice(0, 100)} ...</p>
            <button
              onClick={() =>
                navigate("/blog-details", { state: { data:item} })
              }
            >
              See more
            </button>
            <button onClick={() => navigate(`/blog-details/${item.title}`)}>
              See more
            </button>
          </div>
        );
      })} */}

      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          {blog.map((item, index) => {
            return (
              <div key={index} className="card">
                <h3>{item.title}</h3>
                <img src={item.fileUrl} style={{ width: "100%" }} />
                <p>{item.details.slice(0, 100)} ...</p>
                <button onClick={() => navigate(`/blog-details/${item.id}`)}>
                  See more
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Blog;
