import { useEffect, useState } from "react";
import useContratStore from "@/app/stores/contratStore";
import { findAllContrats } from "../../actions/contrats";

export const useContrat = () => {
  const { loadContrats, contrats } = useContratStore();

  useEffect(() => {
    const fetchContrats = async () => {
      await loadContrats();
    };
    fetchContrats();
  }, [loadContrats]);

  return { contrats };
};
