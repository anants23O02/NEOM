export const registerAccount = async (req,res) => {
    console.log('here :>> ',req.body);
    return res.status(200).json({redirect:'/dashboard'});
}