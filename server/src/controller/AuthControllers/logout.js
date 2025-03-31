 export const logout = async (req, res) => {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true, 
      sameSite: "Strict",
    });
    res.status(200).json({ message: "Logged out successfully" });
  };