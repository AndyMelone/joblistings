"use server";

import prisma from "@/lib/db";
import { contrat } from "@prisma/client";

export const findAllContrats = async () => {
  const contrats = await prisma.contrat.findMany();
  return contrats as contrat[];
};

export const findContratById = async (id: string) => {
  const contrat = await prisma.contrat.findUnique({
    where: { id: id },
  });
  return contrat as contrat;
};

export const createContrat = async (contrat: contrat) => {
  const newContrat = await prisma.contrat.create({
    data: contrat,
  });
  return newContrat as contrat;
};
