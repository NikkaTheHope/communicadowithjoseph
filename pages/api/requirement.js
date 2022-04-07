// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  
  if(req.method === "GET"){
    
  }

  if(req.method === "POST"){
    const call = req.body.call;
    if(call==="create"){
      const date = new Date();
      const newRequirement = {
        content: req.body.content,
        createdAt: `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ( ${date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()} )`
      }      
      const add = await prisma.requirement.create({
        data:newRequirement
      });
      
    }

    if(call === "delete"){    
      const deleteRequirement = await prisma.requirement.delete({
        where: {
          id: req.body.id
        }
      });
    }
  }

  const requirements = await prisma.requirement.findMany();
  res.status(200).json({ data:requirements, msg:req.method});
}
