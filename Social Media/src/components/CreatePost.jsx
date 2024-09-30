import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";

const CreatePost = () => {


  // const { addPost }=useContext(PostList)


  const handleSubmit=(event)=>{

  }


  return (
    <>
        <Form method="POST" className="create-post">
            <div className="mb-3">
                <label htmlFor="userId" className="htmlForm-label">Enter Your User ID here</label><br></br>
                <input name="userId" type="text" className="htmlForm-control" id='userId' placeholder="Your User ID"/>
            </div>
            <div className="mb-3">
                <label htmlFor="title" className="htmlForm-label">Post Title</label><br></br>
                <input name="title" type="text" className="htmlForm-control" id='title' placeholder="How are you feeling today..."/>
            </div>
            <div className="mb-3">
                <label htmlFor="body" className="htmlForm-label">Post Content</label><br></br>
                <textarea name="body" rows="6" type="text" className="htmlForm-control" id='body' placeholder="Tell us more about yourself"/>
            </div>
            <div className="mb-3">
                <label htmlFor="reactions" className="htmlForm-label">Number of reactions</label><br></br>
                <input name="reactions" type="text" className="htmlForm-control" id='reactions' placeholder="How many people liked this post"/>
            </div>
            <div className="mb-3">
                <label htmlFor="tags" className="htmlForm-label">Enter your hashtags here</label><br></br>
                <input name="tags" type="text" className="htmlForm-control" id='tags' placeholder="Please enter tags using space"/>
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
    </Form>
    </>
  )
}

export const createPostAction=async (data)=>{

  const formData=await data.request.formData();
  const postData=Object.fromEntries(formData);
  postData.tags=postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(postData)
  })
    .then((res)=>res.json())
    .then((resObj)=> {
      console.log(resObj);
    });

  return redirect("/create-post");

}

export default CreatePost