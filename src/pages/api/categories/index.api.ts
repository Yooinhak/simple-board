import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "GET") {
    try {
      const categories = await prisma.category.findMany();
      return response.status(200).json(categories);
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error fetching categories", error });
    }
  } else if (request.method === "POST") {
    const { name } = request.body;
    try {
      const newCategory = await prisma.category.create({
        data: {
          name,
        },
      });
      return response.status(201).json(newCategory);
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error creating category", error });
    }
  } else {
    return response.status(405).json({ message: "Method Not Allowed" });
  }
}
