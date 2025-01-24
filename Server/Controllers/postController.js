const Post = require("../Models/postModel");
const User = require("../Models/userModel");

const createPost = async (req, res) => {
    // Extract user details from the token (middleware adds this to req)
    const authorId = req.id;
    const authorAccountType = req.accountType;
  
    // Restrict "Buyers" from creating posts
    if (authorAccountType === "Buyer") {
      return res.status(403).json({
        success: false,
        message: "Forbidden, only sellers can post",
      });
    }
  
    // Extract data from the request body
    const { title, author, price, image, publicId } = req.body;
  
    // Validate required fields
    if (!title || !author || !image || !publicId) {
      return res.status(400).json({
        success: false,
        message: "All fields (title, author, image, publicId) are required",
      });
    }
  
    try {
      // Create a new post instance
      const post = new Post({
        title,
        author,
        price,
        image,
        publicId,
        authorId, // Link the post to the author
      });
  
      // Save the post to the database
      await post.save();
  
      // Update the author's uploads in the User schema
      await User.findByIdAndUpdate(authorId, {
        $push: { uploads: post._id },
      });
  
      // Respond with success
      return res.status(200).json({
        success: true,
        message: "Post Created Successfully",
        post,
      });
    } catch (error) {
      console.error("Error in createPost:", error.message);
      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  };

const getAllPost = async (req, res) => {
  try {
    const posts = await Post.find({});
    if (posts.length === 0) {
      return res.status(404).json({ success: false, message: "No Post Found" });
    }

    return res.status(200).json({ success: true, data: posts });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

const getMyPost = async (req, res) => {
  const authorId = req.id;
  const authorAccountType = req.accountType;

  try {
    if (authorAccountType === "buyer") {
      const { purchased } = await User.findById(authorId).populate("purchased");
    //   console.log(purchased);
      if (!purchased)
        return res
          .status(500)
          .json({ success: false, message: "No posts Found" });
      return res.status(200).json({ success: true, data: purchased });
    }
    else{
        const { uploads } = await User.findById(authorId).populate("uploads");
        if (!uploads)
            return res
              .status(500)
              .json({ success: false, message: "No posts Found" });
        return res.status(200).json({ success: true, data: uploads });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};

const deletePost = async (req, res)=> {
    //  req.params se ye id delete router pe post id pass kia hai 
    const { id } = req.params;
    // console.log("Post Id :- ",id);
    
    try {
        const post = await Post.findById(id);

        if(!post) return res.status(404).json({ success: false, message: "Post Not Found"});
        
        const { authorId } = post;
        
        await User.findByIdAndUpdate( authorId, {
            $pull: { uploads: id },
        } );

        // we will not do this because people who already purchased the image will also loose the image
        // await Post.findByIdAndDelete(id);
        return res.status(200).json({ success: true, message: "Post Deleted Successfully"});

    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { createPost, getAllPost, getMyPost, deletePost };