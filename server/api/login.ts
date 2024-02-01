export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    if (body.userName === 'admin' && body.password == 'admin1') {
        setResponseStatus(event, 200)
        return {
            hello: 'world',
        }
    }

    setResponseStatus(event, 403)
})
