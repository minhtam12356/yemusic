export const healthCheck = async (req, res, next) => {
    try {
        res.send({ isSuccess: true });
    } catch (error) {
        next(error);
    }
}