// pages/api/posts/index.ts
import prisma from "../../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method === "GET") {
    // GET 요청일 경우 모든 게시글을 조회하여 반환합니다.
    try {
      const posts = await prisma.post.findMany();
      return response.status(200).json(posts);
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error fetching posts", error });
    }
  } else if (request.method === "POST") {
    // POST 요청일 경우 새로운 게시글을 생성합니다.
    const { title, contents, categoryIds } = request.body;
    try {
      const newPost = await prisma.post.create({
        data: {
          contents,
          title,
          categories: {
            connect: categoryIds.map((id: string) => ({ id })),
          },
        },
      });
      return response.status(201).json(newPost);
    } catch (error) {
      return response
        .status(500)
        .json({ message: "Error creating post", error });
    }
  } else {
    // 지원하지 않는 HTTP 메서드일 경우 에러를 반환합니다.
    return response.status(405).json({ message: "Method Not Allowed" });
  }
}
