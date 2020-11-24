const Upload = require('../models/VideoDetailsSchema');

exports.getUpload = async (req, res) => {
  const upload = await Upload.find();
  res.status(200).json({ upload });
};

exports.postUpload = async (req, res) => {
  const { name } = req.body;
  const videoPath = 'http://localhost:3000/videos/' + req.file.filename; // Note: set path dynamically
  const upload = new Upload({
    name,
    videoPath,
  });
  const createdProfile = await upload.save();
  res.status(201).json({
    upload: {
      ...createdProfile._doc,
    },
  });
};
