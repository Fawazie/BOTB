const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
  });
  
  const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed!'), false);
    }
  };
  
  const upload = multer({ storage, fileFilter });

  const uploadFile = async (req, res) => {
    if (!req.file) return res.status(400).json({ error: 'Invalid file type' });
  
    try {
      const data = parseExcel(req.file.path);
      res.status(200).json({ message: 'File uploaded and parsed successfully', data });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  