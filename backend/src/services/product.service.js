import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export const ProductService = {
    getAll: () => {
        return prisma.product.findMany()
    },
    getById: (id) => {
        return prisma.product.findUnique({
            where: {
                id: Number(id)
            }
        })
    },
    create: (data) => {
        return prisma.product.create({data})
    },
    updateById: (id, data) => {
        const updatedData={};
        if(data.title!==undefined){
            updatedData.title=data.title;
        }

        if(data.price!==undefined){
            updatedData.price=data.price;
        }

        if(data.quantity!==undefined){
            updatedData.quantity=data.quantity;
        }
        return prisma.product.update({
            where: {id: Number(id)},
            data:updatedData
        })
    },
    deleteById:(id)=>{
        return prisma.product.delete({
            where:{id:Number(id)}
        })
    }
}
