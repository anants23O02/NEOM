export const registerAccount = async (req,res) => {
    console.log('here :>> ');
    return res.status(200).json({redirect:'/dashboard'});
}