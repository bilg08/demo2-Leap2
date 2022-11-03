const PostSchema = require("../model/postSchema");
const MyError = require("../utils/myError");
const asyncHandler = require("../middleware/asyncHandler");

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await PostSchema.find();

    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

exports.getPost = asyncHandler(async (req, res, next) => {
  const posts = await PostSchema.findById(req.params.id);

  if (!posts) {
    throw new MyError("not found", 400);
  }

  res.status(200).json({
    success: true,
    data: posts,
  });
});

exports.createPost = async (req, res, next) => {
  try {
    const newPost = await PostSchema.create(req.body);

    res.status(200).json({
      success: true,
      data: newPost,
    });
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const posts = await PostSchema.findByIdAndDelete(req.params.id);

    if (!posts) {
      throw new MyError("not found", 400);
    }
    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const posts = await PostSchema.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!posts) {
      throw new MyError("not found", 400);
    }
    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (err) {
    next(err);
  }
};
