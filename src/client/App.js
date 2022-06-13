import React, { useState } from 'react';
import '../../assets/css/style.css';

const initialPosts = [
  {
    id: 2,
    text: 'Lorem ipsum',
    user: {
      avatar: '/uploads/avatar1.png',
      username: 'Test User',
    },
  },
  {
    id: 1,
    text: 'Lorem ipsum',
    user: {
      avatar: '/uploads/avatar2.png',
      username: 'Test User 2',
    },
  },
];

function App() {
  console.log(1, initialPosts);
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className="container">
      <div className="feed">
        {initialPosts.map((post) => {
          return (
            <div className="post" key={post.id}>
              <div className="header">
                <img src={post.user.avatar} alt={post.user.username} />
                <h2>{post.user.username}</h2>
              </div>
              <p>{post.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
