/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// eslint-disable-next-line semi
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
