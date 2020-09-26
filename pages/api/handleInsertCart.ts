import { NowRequest, NowResponse } from '@vercel/node'

export default (req: NowRequest, res: NowResponse) => {
  return res.status(200).json({message: "Hello World"})
}
