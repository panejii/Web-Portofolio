export const login = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Login endpoint berhasil dibuat",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};