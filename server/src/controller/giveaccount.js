export const giveaccount = (req,res) => {
    console.log('req.body :>> ', req.body);
    return res.status(201).json({user:req.body})
}