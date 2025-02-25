
export const regMiddleware = async (req,res,next) => {
    const data = await req.body;
        console.log('req.body :>> ', data);    
        next();
}