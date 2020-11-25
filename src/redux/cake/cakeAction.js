export const BUY_CAKES = "BUY_CAKES"

export const buyCakes = (num = 1) => (
    {
        type:BUY_CAKES,
        payLoad: num

})