const express = require("express");
const path = require("path");
const router = express.Router();
const blogs = require("../data/blogs");

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/blogs", (req, res) => {
  res.render("blogs", {
    blogs: blogs,
  });
});

router.get("/blogpost/:slug", (req, res) => {
  const slug = req.params.slug;
  const blog = blogs.find((element) => element.slug == slug);
  res.render("blogPage", {
    blog: blog,
  });
});

module.exports = router;
