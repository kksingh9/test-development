import { useEffect, useState } from 'react';

const Async = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let setinterval = setInterval(() => {
            (async () => {
              try {
                const response = await fetch(
                  "https://expenses-e01a2-default-rtdb.firebaseio.com/expenses.json"
                );
      
                const data = await response.json();
      
                let newArray = [];
                for (let key in data) {
                  newArray.push({
                    id: key,
                    moneySpent: data[key].moneySpent,
                    description: data[key].description,
                    category: data[key].category,
                  });
                }
      
                setPosts(newArray);
                //controller = null;
              } catch (err) {
                alert(err.message);
              }
            })();
          }, 200);
          return () => clearInterval(setinterval);
    },[]);

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.category}</li>
                ))

                }
            </ul>
        </div>
    )
}

export default Async;