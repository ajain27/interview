import { Post } from "../models/post.model.js";

const createPost = async (req, res) => {
  try {
    const { name, age, description } = req.body;
    if (!name || !age || !description) {
      return res.status(400).json({
        message: "all fields are required",
      });
    }

    const post = await Post.create({ name, age, description });

    res.status(201).json({
      message: "post creates successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
    });
  }
};

const updatePost = async (req, res) => {
  try {
    // basic validation to check if the body is empty
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "no data provided to update",
      });
    }

    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!post) {
      return res.status(404).json({
        message: "no post found",
      });
    }
    res.status(200).json({
      message: "post updated successfully",
      post,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    // basic validation to check if the body is empty
    const deleted = await Post.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({
        message: "no post found",
      });
    }
    res.status(200).json({
      message: "post deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error,
    });
  }
};
export { createPost, getPosts, updatePost, deletePost };
